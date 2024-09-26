import { prisma } from "~/db.server";

interface Post {
  slug: string;
  title: string;
}

export async function getPosts(): Promise<Post[]> {
  return prisma.post.findMany();
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({
    where: {
      slug,
    },
  });
}
