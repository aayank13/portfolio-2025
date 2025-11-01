import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blogs";

export default async function RecentBlogs() {
  const posts = await getAllBlogPosts();
  const recentPosts = posts.slice(0, 10); // Get the 10 most recent posts

  // Format date as "MMM DD, YYYY"
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <section>
      {/* Header with link to full archive */}
      <div>
        <h2 className="text-xl font-extrabold inline">
          Recent blog posts
        </h2>
        <span className="mx-2 text-2xl font-extrabold">•</span>
        <Link
          href="/blogs"
          className="text-(--color-primary-blue) hover:underline"
        >
          Full archive ➔
        </Link>
      </div>

      {/* Description */}
      <p className="mt-2">
        Things I have written recently.
      </p>

      {/* Posts List */}
      <div className="content">
        <ul className="list-disc list-outside ml-8 mt-4">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <span className="text-gray-500 font-mono text-sm mr-2">
                {formatDate(post.date)} :
              </span>
              <Link
                href={`/blogs/${post.slug}`}
                className="text-(--color-primary-blue) hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
