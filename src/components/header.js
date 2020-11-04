import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <div>
      <nav>
        <p>
          <Link to="/">Index</Link>
        </p>

        <p>
          <Link to="/about">About</Link>
        </p>
      </nav>
    </div>
  )
}
