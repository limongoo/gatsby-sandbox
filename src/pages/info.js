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
    <Header headerText="header props"/> 
    <p>Such wow. Very React.</p>
  </div>
)