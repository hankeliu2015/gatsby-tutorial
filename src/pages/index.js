import React from "react";
import {Link} from 'gatsby';
import Navbar from '../components/Navbar.js'

export default function Home() {
  return (
    <div>
      <Navbar />
      Hello world!
      <div>
        <Link to="/blog">Blog Page</Link>
      </div>
      <a href="https://www.gatsbyjs.org">Gatsby Docs</a>
    </div>
  )
}
