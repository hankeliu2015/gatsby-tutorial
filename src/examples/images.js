import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import img from "../images/image1.jpg";
import Image from "gatsby-image";

const images = () => {
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
      </article>
    </section>
  )
};

export default images
