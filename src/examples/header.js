import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
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
  `)
  // return <pre>{JSON.stringify(data, null, 4)}</pre>
  return (
    <div>
      <h2>{data.site.siteMetadata.person.name}</h2>
      <h2>{data.site.siteMetadata.person.age}</h2>
    </div>
  )
}

export default Header
