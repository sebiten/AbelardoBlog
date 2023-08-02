const fs = require("fs");
const path = require("path");
const grayMatter = require("gray-matter");
const { remark } = require("remark");
const html = require("remark-html");

module.exports = {
  getSortedPostsData() {
    const postsDirectory = path.join(process.cwd(), "blogposts");
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = grayMatter(fileContents);

      const blogPost = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        imageUrl: matterResult.data.imageUrl || "",
        categories: matterResult.data.categories || [],
      };

      return blogPost;
    });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  },

  async getPostData(id) {
    const postsDirectory = path.join(process.cwd(), "blogposts");
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = grayMatter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    const blogPostWithHTML = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      contentHtml,
      imageUrl: matterResult.data.imageUrl || "",
      categories: matterResult.data.categories || [],
    };

    return blogPostWithHTML;
  },
};
