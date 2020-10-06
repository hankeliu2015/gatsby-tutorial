import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import img from "../images/image1.jpg";
import Image from "gatsby-image";

const getImages = graphql`
  {
    fixed: file(relativePath: {eq: "image2.jpg"}) {
      childImageSharp {
        fixed(width: 200, height: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "image3.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
const Images = () => {
  const data = useStaticQuery(getImages);

  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src= {img} width="100%" alt='image1' />
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed}/>
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
          <Image fluid={data.fluid.childImageSharp.fluid}/>
      </article>
    </section>
  )
};

export default Images
