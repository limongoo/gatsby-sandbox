import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/info/">Info</Link>
    <Link to="/about/">About</Link>
    <Link to="/about-css-modules/">CSS Modules</Link>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Contact" />
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
  </div>
)