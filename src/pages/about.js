import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/info/">Info</Link>
    <Link to="/about/">About</Link>
    <Link to="/about-css-modules/">CSS Modules</Link>
    <Link to="/contact/">Contact</Link>
    <h1>About me</h1>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
  </div>
)