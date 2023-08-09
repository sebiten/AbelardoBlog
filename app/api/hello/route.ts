import { getSortedPostsData } from "@/lib/posts";

export async function GET(request: Request) {
  try {
    // Retrieve the category filter from the query parameters
    const queryParams = new URLSearchParams(request.url.split("?")[1]);

    // Use the || operator to provide a default value (an empty string) if categoryFilter is null
    const categoryFilter = queryParams.get("categoryFilter") || "";

    // Fetch and process your posts data based on the category filter
    const posts = getSortedPostsData(categoryFilter);

    // Return the posts data as JSON response
    return new Response(JSON.stringify(posts), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Handle error and return an appropriate response
    return new Response("Error fetching posts", { status: 500 });
  }
}
