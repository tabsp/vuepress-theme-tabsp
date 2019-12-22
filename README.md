# Vuepress theme tabsp

Vuepress 博客主题，预览地址 [https://tabsp.com](https://tabsp.com)



## 使用教程

Vuepress 文档参考 [https://vuepress.vuejs.org/zh/guide/](https://vuepress.vuejs.org/zh/guide/)

Vuepress 配置文件参考：

```
module.exports = {
  title: 'The Tabsp Blog',
  description: 'Just playing around',
  theme: 'vuepress-theme-tabsp',
  themeConfig: {
    nav: 
    [
      { text: 'Blog', link: '/' },
      { text: 'Tags', link: '/tags/' },
    ],
    // 文章目录 默认 '/posts'
    postDir: '/posts',
    permalink: '/posts/:slug',
    footer: {
      gitHub: 'https://github.com/tabsp',
      // 响应国家政策
      beian: {
        show: true,
        number: '粤ICP备xxxx号'
      },
    },
    post: {
      // 链接到文章源码
      srcDir: 'https://github.com/tabsp/tabsp.github.io/blob/src/posts/',
      // 提交 ISSUE
      newIssue: 'https://github.com/tabsp/tabsp.github.io/issues/new'
    },
  },
}
```

依赖引入：

```
"vuepress-theme-tabsp": "^1.0.0"
```

## TODO

- 分页功能
- 标签功能
- TOC
- ...