import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

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
                <span>Projects</span>
                <span className="ml-2 text-gray-500 font-mono not-italic font-bold text-[1.7rem]">
                  ({projects.length})
                </span>
              </h2>
            </div>

            <div className="space-y-3 text-lg leading-relaxed text-(--color-text-primary)">
              <p>
                A collection of projects I&apos;ve built while exploring different
                technologies and solving interesting problems. Each project
                represents a learning experience and showcases various skills
                from design to implementation.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-6 border-t border-gray-300" />

        {/* Projects List */}
        <div>
          <ul className="space-y-2 list-disc ml-8 text-base">
            {projects.map((project) => (
              <li key={project.slug} className="list-item">
                <span className="hidden md:inline text-gray-500 font-mono text-base mr-2">
                  {formatDate(project.date)} :
                </span>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-(--color-primary-blue) hover:underline"
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}