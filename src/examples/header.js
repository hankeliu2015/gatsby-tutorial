import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData= graphql`
  {
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
const Header = () => {
  const {
    site: {
      info: {
        title,
        person: {name},
      }
    }
  } = useStaticQuery(getData)

  return (
    <div>
      {/*
        <h1>Title: {data.site.siteMetadata.title}</h1>
        <h1>Name: {data.site.siteMetadata.person.name}</h1>
      */}
        <h1>Title: {title}</h1>
        <h1>Name: {name}</h1>
    </div>
  )
}

export default Header
