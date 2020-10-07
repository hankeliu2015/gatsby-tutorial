import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';
import Styles from '../components/products.module.css';
import Image from 'gatsby-image';
import {Link} from 'gatsby';


const ComponentName = ({data}) => {
  const {allContentfulProduct: {nodes: products}} = data;

  return (
    <Layout>
      <section className={Styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title}></Image>
              <h3>{product.title}<span></span>{product.price}</h3>
              <Link to={`/products/${product.slug}`}>More details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )

}
// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        title
        price
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`

export default ComponentName


// import React, { Component } from 'react';
// import Layout from '../components/layout';
// import styles from '../components/products.module.css'
//
// export default class products  extends Component {
//
//   render() {
//     return (
//       <Layout>
//         <div className={styles.page}>
//           <h1>this is our products</h1>
//           <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//         </div>
//       </Layout>
//     );
//   }
// }
