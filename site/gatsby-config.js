module.exports = {
  siteMetadata: {
    description: "Personal page of Judy Sun",
    locale: "en",
    title: "Judy Sun",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
