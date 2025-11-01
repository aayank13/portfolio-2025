export interface ProjectMetadata {
  title: string;
  date: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Project extends ProjectMetadata {
  slug: string;
  content: string;
}
