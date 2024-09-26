import { json, LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import invariant from "tiny-invariant"
import { getPost } from "~/models/post.server"

export const loader = async ({params} : LoaderFunctionArgs) => {
  const slug = params.slug
  invariant(slug, 'slug is required')
  const post = await getPost(slug)
  invariant(post, 'post is not found')
  const markdown = post.markdown

  return json({ post, markdown })
}

export default function PostSlug () {
  const {post, markdown} = useLoaderData<typeof loader>()

  return (
    <main className="mx-auto max-w-4xl">
      <h1>{post.title}</h1>

      <div>
        {markdown}
      </div>
    </main>
  )
}