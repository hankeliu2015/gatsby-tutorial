import React from 'react';
import Layout from '../components/layout';
import Header from '../examples/header';
import {graphql} from 'gatsby';

const examples = ({data}) => {
  // console.log(data)
  const {site:{info:{author}}} = data;
  return (
    <Layout>
      <h1>This is example page of graphQL staticQuery</h1>
      <Header />
      <h3>author: {author} </h3>
    </Layout>
  )
};

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`

export default examples
