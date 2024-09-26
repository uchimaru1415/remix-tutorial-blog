interface Post {
  slug: string
  title: string
}

export async function getPosts(): Promise<Post[]> {
  return [
    {
      slug: 'my-first-post',
      title: 'my-first-post',
    },
    {
      slug: 'my-first-post2',
      title: 'my-first-post2',
    },
  ]
}