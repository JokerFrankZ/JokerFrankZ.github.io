module.exports = {
  lang: 'zh-CN',
  title: "Frank's Blog",
  description: 'share some interesting things',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': 'docs',
      },
    },
  },
}
