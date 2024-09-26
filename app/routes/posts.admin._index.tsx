import { Link } from "@remix-run/react"

export default function postAdmin () {

  return (
    <p>
      <Link to="new">create a new post</Link>
    </p>  
  )
}