import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";
import AsidePosts from "@/app/components/AsidePosts";

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This post does not exist.",
    };
  }

  return {
    title: post.meta.title,
    description: post.meta.description || "", // Use unique description
    keywords: post.meta.tags,
    alternates: {
      canonical: `/posts/${postId}`,
      languages: {
        "es-ES": `es-ES/posts/${postId}`,
      },
    },
    og: {
      type: "article",
      title: post.meta.title,
      description: post.meta.description || "",
      image: post.meta.imageUrl || "",
    },
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <>
      <hr className="mt-10"></hr>
      <h1 className="text-3xl mt-4 mb-0">{meta.title}</h1>{" "}
      {/* Use h1 for the title */}
      <p className="mt-0 text-sm">{pubDate}</p>
      <article className="prose-a:text-yellow-400">{content}</article>
      <section>
        <h2 className="text-yellow-400">Relacionados:</h2>{" "}
        {/* Use h2 for subheadings */}
        <div className="flex flex-row gap-4 underline">#{tags}</div>
        {/* @ts-expect-error Async Server Component */}
        <AsidePosts />
      </section>
      <p className="mb-10 text-2xl  hover:animate-pulse">
        <Link
          className="text-yellow-400 border-b font-bold border-yellow-400 "
          href="/"
        >
          ← Volver al inicio 🏡
        </Link>
      </p>
      <hr className="mt-10"></hr>
    </>
  );
}
