module.exports = {
  siteMetadata: {
    title: `Explore Angola`,
    description: `Do you like trip? So, let's know more about Angola`,
    author: `@fernando`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `explore-angola`,
        short_name: `explore`,
        start_url: `/`,
        background_color: `#0467FB`,
        theme_color: `#0467FB`,
        display: `minimal-ui`,
        icon: `src/assets/profile.png`,
      },
    },
     `gatsby-plugin-offline`,
  ],
}
