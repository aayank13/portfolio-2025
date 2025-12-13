import { getProject, getAllProjects, formatDate } from '@/lib/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const project = await getProject(slug);
    return {
      title: `${project.title} | Aayan Khan`,
      description: project.description,
    };
  } catch {
    return {
      title: 'Project Not Found',
    };
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let project;
  
  try {
    project = await getProject(slug);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen pt-4 pb-10 px-6">
      <article className="max-w-6xl mx-0 lg:mx-12 lg:px-5 xl:mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            href="/projects" 
            className="text-(--color-primary-red) hover:underline"
          >
            ← Back to Projects
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-(--color-text-black)">
            {project.title}
          </h1>
          
          <time className="text-sm text-(--color-text-primary) mb-4 block">
            {formatDate(project.date)}
          </time>
          
          {/* Links Section */}
          {(project.link || project.github) && (
            <div className="flex gap-6 mb-4 items-center">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--color-primary-blue) hover:underline flex items-center gap-1.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              )}
              {project.link && project.github && (
                <span className="text-gray-300">|</span>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--color-primary-blue) hover:underline flex items-center gap-1.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              )}
            </div>
          )}
          
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-gray-100 text-(--color-text-primary) rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none 
            prose-a:text-(--color-primary-blue) prose-a:no-underline hover:prose-a:underline prose-a:cursor-pointer
            prose-code:text-[#0ea5e9] prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-semibold prose-code:before:content-[''] prose-code:after:content-['']
            prose-pre:p-0 prose-pre:bg-transparent
            [&_pre]:p-4! [&_pre]:m-0! [&_pre]:rounded-lg"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </article>
    </main>
  );
}
