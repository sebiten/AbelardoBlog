import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1 className="text-center text-white text-3xl">The requested post does not exist.</h1>
      <p>
        <Link className="text-center text-white text-xl" href="/">← Back to home</Link>
      </p>
    </>
  );
}
