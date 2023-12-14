import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";
import Head from "next/head";

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
    description: post.meta.title || "", // Add a description if available
    alternates: {
      canonical: `/posts/${postId}`,
      languages: {
        "es-ES": `es-ES/posts/${postId}`,
      },
    },
    // Add more metadata as needed
    og: {
      type: "article",
      title: post.meta.title,
      description: post.meta.title || "",
      image: post.meta.imageUrl || "", // Add the image URL if available
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
      {/* Include SEO metadata in the head of the document */}
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.title || ""} />
        {/* Add more meta tags as needed */}
      </Head>
      <hr className="mt-10"></hr>
      <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
      <p className="mt-0 text-sm">{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3 className="text-yellow-400">Relacionados:</h3>
        <div className="flex flex-row gap-4 underline">#{tags}</div>
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
