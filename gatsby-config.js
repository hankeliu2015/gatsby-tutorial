/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: "some random description",
    author: "@HHudson",
    data: ["item1", "item2"],
    persoon: {name: "Henry", age: 33},
  },
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`],
}
