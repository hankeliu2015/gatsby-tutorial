
import React, { Component } from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';
import styles from '../components/blog.module.css'

export default class blog extends Component {

  render() {
    return (
      <Layout>
        <div className={styles.page}>
          <h1> this is our blog page.</h1>
          <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </Layout>
    );
  }
}
