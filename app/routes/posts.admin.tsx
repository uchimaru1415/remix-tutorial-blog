import { json } from "@remix-run/node"
import { Link, Outlet, useLoaderData } from "@remix-run/react"
import { getPosts } from "~/models/post.server"

export const loader = async () => {
  return json({posts: await getPosts()})
}

export default function postAdmin () {
  const { posts } = useLoaderData<typeof loader>()

  return (
    <main className="mx-auto max-w-4xl">
      <h1>Post Admin</h1>
      <div className="grid md:grid-cols-2">
        <nav>
          <ul>
            {posts.map(post => (
              <li key={post.slug}>
                <Link to={"/posts/" + post.slug} className="text-blue-600 my-4">{post.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </main>
  )
}