import fs from "fs";
import path from "path";
import matter from "gray-matter";

const publicationsDir = path.join(process.cwd(), "content/publications");

export interface Publication {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  excerpt?: string;
  content: string;
}

export function getAllPublications(): Publication[] {
  const files = fs.readdirSync(publicationsDir);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(publicationsDir, file);
      const fileContents = fs.readFileSync(filePath, "utf-8");

      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        coverImage: data.coverImage || null,
        excerpt: data.excerpt || "",
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPublicationBySlug(slug: string): Publication {
  const fullPath = path.join(publicationsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    coverImage: data.coverImage || null,
    excerpt: data.excerpt || "",
    content,
  };
}
