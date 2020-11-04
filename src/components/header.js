import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <div>
      <nav>
        <p>
          <Link to="/users/1">Index</Link>
        </p>

        <p>
          <Link to="/users/2">About</Link>
        </p>
      </nav>
    </div>
  )
}
