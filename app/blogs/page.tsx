import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blogs";

export default async function BlogsPage() {
  const posts = await getAllBlogPosts();

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
    <main className="min-h-screen pt-4 pb-10 px-6">
      <div className="max-w-6xl mx-0 lg:mx-12 lg:px-5 xl:mx-auto">
        {/* Title Section */}
        <div className="mb-6 lg:grid lg:grid-cols-2">
          <div>
            <div className="mb-4">
              <h2
                className="inline text-[2rem] font-semibold italic"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                <span>Blogs</span>
                <span className="ml-2 text-gray-500 font-mono not-italic font-bold text-[1.7rem]">
                  ({posts.length})
                </span>
              </h2>
            </div>

            <div className="space-y-3 text-lg leading-relaxed text-(--color-text-primary)">
              <p>
                I write to clarify my thoughts and document what I learn while
                building and exploring new technologies. Each post captures a
                small part of that journey, from problem-solving lessons to
                ideas that sparked curiosity.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-6 border-t border-gray-300" />

        {/* Blog List */}
        <div>
          <ul className="space-y-2 list-disc ml-8 text-base">
            {posts.map((post) => (
              <li key={post.slug} className="list-item">
                <span className="hidden md:inline text-gray-500 font-mono text-base mr-2">
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
      </div>
    </main>
  );
}
