import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphal`
  {
    site {
      siteMetadata {
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
  const data = useStaticQuery(getData);
  console.log(data);
  
  return (
    <div>
      <h2>{data.site.siteMetadata.person.name}</h2>
      <h2>{data.site.siteMetadata.person.age}</h2>
    </div>
  )
}

export default Header
