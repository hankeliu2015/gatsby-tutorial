import React from "react";
import {Link} from 'gatsby';

export default function Home() {
  return (
    <div>
      Hello world!
      <div>
        <Link to="/blog">Blog Page</Link>
      </div>
      <a href="https://www.gatsbyjs.org">Gatsby Docs</a>
    </div>
  )
}
