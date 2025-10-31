export interface BlogMetadata {
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export interface BlogPost extends BlogMetadata {
  slug: string;
  content: string;
}
