import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout";
import Image from "gatsby-image";

// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>
const ComponentName = ({ data: {product: { title, price, image:{fixed}, info: {info}}} }) => {
  return (
    <Layout>
      <div style={{textAlign: "center"}}>
        <Link to="/products">back to products</Link>
        <h1>single product</h1>
      </div>
      <section className="single-product">
        <article>
          <Image fixed={fixed} alt={title} />
        </article>
        <article>
          <h1>{title}</h1>
          <h3>{price}</h3>
          <p>{info}</p>
          <button>add to card</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: {eq: $slug}) {
      title
      price
      image {
        fixed (width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName

// import React from 'react';
//
// const productTemplate = (props) => {
//   console.log(props);
//   return (
//     <div>
//       this is product template
//     </div>
//   )
// };
//
// export default productTemplate
