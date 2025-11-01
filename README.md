# Portfolio 2025

A modern, minimal portfolio website built with Next.js 16, featuring a blog system, project showcase, and responsive design.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with gray-matter
- **Deployment**: Vercel

## Features

- 📝 **Blog System** - Write posts in markdown
- 🚀 **Project Showcase** - Display your work
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Fast Performance** - Server-side rendering
- 🎨 **Clean UI** - Minimal and focused design

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Content Management

### Adding a Blog Post

Create a new `.md` file in `content/blogs/`:

```markdown
---
title: "Your Blog Title"
date: "2025-11-01"
description: "Brief description"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Adding a Project

Create a new `.md` file in `content/projects/`:

```markdown
---
title: "Your Project Title"
date: "2025-11-01"
description: "Brief description"
tags: ["React", "Next.js"]
link: "https://live-demo.com"
github: "https://github.com/username/repo"
---

Your project description...
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── blogs/             # Blog pages
│   ├── projects/          # Project pages
│   ├── contact/           # Contact page
│   ├── about-me/          # About page
│   └── components/        # React components
├── content/               # Markdown content
│   ├── blogs/            # Blog posts
│   └── projects/         # Project write-ups
└── lib/                   # Utility functions
    ├── blogs.ts          # Blog utilities
    └── projects.ts       # Project utilities
```


Built with ❤️ by Aayan Khan
