import React from "react";
// import {Link} from 'gatsby';
// import Navbar from '../components/Navbar.js';
import Layout from '../components/layout';
import { ExampleButton } from '../components/button.js'

export default function Home() {
  return (
    <Layout>
      <h1 style={{color:'green', textTransform: "uppercase"}}>Hello from Gatsby Home Page</h1>
      <h1>Hello people</h1>
      <h1>Hello world</h1>
      <ExampleButton>Click me </ExampleButton>
  </Layout>
  )
}
