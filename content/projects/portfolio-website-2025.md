---
title: "Portfolio Website 2025"
date: "2025-11-01"
description: "A modern portfolio website built with Next.js 16, featuring a blog system, project showcase, and responsive design."
tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
# link: "https://aayankhan.xyz"
github: "https://github.com/aayank13/portfolio-2025"
---

# Portfolio Website 2025

A modern, fast, and responsive portfolio website built with the latest web technologies to showcase my work and share my thoughts through blog posts.

## Overview

This project serves as both a personal portfolio and a blogging platform. It's designed to be performant, SEO-friendly, and easy to maintain with markdown-based content management.

## Key Features

- **Blog System**: Write and publish blog posts using markdown files
- **Project Showcase**: Display projects with detailed descriptions and links
- **Responsive Design**: Optimized for all screen sizes
- **Dark Mode Ready**: Built with customizable CSS variables
- **Fast Performance**: Leverages Next.js 16 App Router and Server Components
- **SEO Optimized**: Proper metadata and semantic HTML

## Tech Stack

The website is built using modern web technologies:

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for utility-first styling
- **Content**: Markdown files with gray-matter for frontmatter parsing
- **Syntax Highlighting**: rehype-highlight for code blocks

## Architecture

### Content Management

All content is stored as markdown files in the `content` directory:

```text
content/
├── blogs/
│   └── *.md
└── projects/
    └── *.md
```

Each markdown file includes frontmatter with metadata:

```yaml
---
title: "Project Title"
date: "2025-11-01"
description: "Brief description"
tags: ["tag1", "tag2"]
link: "https://live-demo.com"
github: "https://github.com/username/repo"
---
```

### Utility Functions

The project uses utility functions to read and process markdown files:

- `getAllProjects()`: Fetches all project metadata
- `getProject(slug)`: Fetches a single project with rendered HTML
- `formatDate()`: Formats dates consistently

## Development Experience

The development setup includes:

- Hot reload for instant feedback
- TypeScript for catching errors early
- ESLint for code quality
- Tailwind CSS for rapid styling

## Deployment

The website is deployed on Vercel, taking advantage of:

- Automatic deployments from Git
- Global CDN for fast content delivery
- Server-side rendering for optimal performance
- Static generation for blog and project pages

## Lessons Learned

Building this portfolio taught me:

1. The power of Next.js 16's App Router
2. Effective content management with markdown
3. Implementing clean and maintainable code structure
4. Performance optimization techniques
5. Responsive design best practices

## Conclusion

This portfolio represents my journey in web development and serves as a platform to share my work and knowledge with others. It's continuously evolving as I learn and experiment with new technologies.

Feel free to explore the code and reach out if you have any questions!
