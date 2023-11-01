import { getSortedPostsData } from "@/lib/posts";

export async function GET(request: Request) {
  try {
    // Retrieve the category filter from the query parameters
    const queryParams = new URLSearchParams(request.url.split("?")[1]);
    const categoryFilter = queryParams.get("categoryFilter") || "";

    if (categoryFilter.length > 100) {
      // Handle invalid input (e.g., categoryFilter too long)
      return new Response("Invalid categoryFilter", { status: 400 });
    }

    // Fetch and process your posts data based on the category filter
    const posts = await getSortedPostsData(categoryFilter);

    if (posts.length === 0) {
      // Handle when no matching data is found
      return new Response("No matching posts found", { status: 404 });
    }

    // Return the posts data as JSON response
    return new Response(JSON.stringify(posts), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error in API request:", error);

    // Return a generic error response
    return new Response("An error occurred while processing the request", {
      status: 500,
    });
  }
}
