module.exports = {
  lang: 'zh-CN',
  title: "Frank's Blog",
  description: 'Share some interesting things',

  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },

  base: './',
  configureWebpack: {
    resolve: {
      alias: {
        '@': 'docs',
      },
    },
  },
}
