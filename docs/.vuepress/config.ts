import { defaultTheme, defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '首页',
  description: 'doc文档，前端文档汇总',
  base: '/fe-interview/',
  theme: defaultTheme({
    repo: 'https://github.com/feericu',
    docsRepo: 'https://github.com/feericu',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/feericu.github.io/edit/:branch/:path',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributors: false,
    contributorsText: '贡献者',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
  }),
  plugins: [
    backToTopPlugin(),
    // docsearchPlugin({
    //   // 配置
    //   apiKey: '1',
    //   indexName: 'babel中文',
    //   appId: '2',
    //   placeholder: '搜索文档'
    // })
    googleAnalyticsPlugin({
      // 配置项
      id: 'G-Q6MTFEY5YY'
    })
  ]
})
