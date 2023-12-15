import rehypeAutolinkHeadings from "rehype-autolink-headings";
import fs from "fs/promises";
import path from "path";
import grayMatter from "gray-matter";
import { compileMDX, MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import Video from "@/app/components/Video";
import CustomImage from "@/app/components/CustomImage";
import GoogleAdUnit from 'nextjs13_google_adsense'


type BlogPost = {
  meta: Meta;
  content: any;
};

export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  try {
    const filePath = path.join(process.cwd(), "blogposts", fileName);
    const rawMDX = await fs.readFile(filePath, "utf-8");

    // Use gray-matter to extract frontmatter
    const { data, content } = grayMatter(rawMDX);

    const result = await compileMDX<MDXRemoteProps>({
      source: content,
      components: {
        Video,
        CustomImage,
        GoogleAdUnit
      },
      options: {
        mdxOptions: {
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
          ],
        },
      },
    });

    if (!result) {
      console.error("Compilation failed for", fileName);
      return undefined;
    }

    // Use the 'content' property for the rendered output
    const renderedOutput = result.content || "";

    if (!renderedOutput) {
      console.error("Invalid result structure for", fileName);
      return undefined;
    }

    const id = fileName.replace(/\.mdx$/, "");

    const blogPostObj: BlogPost = {
      meta: {
        id,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags || [],
        imageUrl: data.imageUrl, // Access the imageUrl property from frontmatter
      },
      content: renderedOutput,
    };

    return blogPostObj;
  } catch (error) {
    console.error("Error reading file:", error);
    return undefined;
  }
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  try {
    const dirPath = path.join(process.cwd(), "blogposts");
    const filesArray = await getFilesInDirectory(dirPath, ".mdx");

    const posts: Meta[] = [];

    for (const file of filesArray) {
      const post = await getPostByName(file);
      if (post) {
        const { meta } = post;
        posts.push(meta);
      }
    }

    return posts.sort((a, b) =>
      new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1
    );
  } catch (error) {
    console.error("Error fetching posts meta:", error);
    return undefined;
  }
}

async function getFilesInDirectory(
  dirPath: string,
  fileExtension: string
): Promise<string[]> {
  const files = await fs.readdir(dirPath);
  return files.filter((file) => file.endsWith(fileExtension));
}
