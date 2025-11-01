import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default async function RecentProjects() {
  const projects = await getAllProjects();
  const recentProjects = projects.slice(0, 10); // Get the 10 most recent projects

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
          Recent projects
        </h2>
        <span className="mx-2 text-2xl font-extrabold">•</span>
        <Link
          href="/projects"
          className="text-(--color-primary-blue) hover:underline"
        >
          Full archive ➔
        </Link>
      </div>

      {/* Description */}
      <p className="mt-2">
        Things I have built recently.
      </p>

      {/* Projects List */}
      <div className="content">
        <ul className="list-disc list-outside ml-8 mt-4">
          {recentProjects.map((project) => (
            <li key={project.slug}>
              <span className="text-gray-500 font-mono text-sm mr-2">
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
    </section>
  );
}
