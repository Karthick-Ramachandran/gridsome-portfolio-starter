// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Awesome Dev",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "./content/blog/**/*.md"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Project",
        path: "./Project/**/*.md"
      }
    }
  ],
  templates: {
    Post: "/blog/:title",
    Project: "/projects/:title"
  },
  transformers: {
    remark: {
      plugins: [
        ["gridsome-plugin-remark-shiki", { theme: "nord", skipInline: true }]
      ]
    }
  }
};
