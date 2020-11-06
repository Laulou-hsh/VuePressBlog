const moment = require('moment');
moment.locale("zh-cn");
// .vuepress/config.js
module.exports = {
    title: "捞佬",
    description: "捞佬的笔记",
    head: [
        ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
        ['meta', { name: 'keywords', content: '捞佬', }],
        ['meta', { name: 'keywords', content: 'vuepress 介绍，vuepress 说明', }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: {
        //更新时间
        '@vuepress/last-updated': {
            transformer: (timestamp) => moment(timestamp).format('LLLL')
            // 不要忘了安装 moment
            // const moment = require('moment');
            // return moment(timestamp).format('LLLL');
        },
        //PWA更新
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新",
            }
        },
        //vssue评论插件
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',
            // 其他的 Vssue 配置
            owner: 'githubsgeek',
            repo: 'VuePressBlog',
            clientId: 'a5d44cbdb8fd1a9944ad',
            clientSecret: '168c36a97b2878481f9f062eb5d7729e3e83cd05',
            autoCreateIssue: true,
        },
    },
    themeConfig: {
        activeHeaderLinks: false,
        lastUpdated: '更新时间', // string | boolean
        logo: '/assets/img/hero.png',
        nav: [
          { text: '主页', link: '/' },
          { text: 'About', link: '/about/' },
          { text: 'CSS', link: '/css/'},
          { text: 'JavaScript', link: '/javascript/'},
          //导航栏
          {
              text: 'B站学习',
              items: [
                  { text: 'Group1', items: [/*  */
                      { text: 'Home', link: '/' },
                      { text: 'About', link: '/about/' },
                  ] },
                  { text: 'Group2', items: [/*  */
                      { text: 'Home', link: '/' },
                      { text: 'About', link: '/about/' },
                  ] }
              ]
          },
          { text: '其他拓展', link: 'https://google.com' },
        ],
        //侧边栏
        // sidebar: [
        //     '/',
        //     '/about',
        //     '/about1',
        //     {
        //         title: 'CSS',   // 必要的
        //         path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 1,    // 可选的, 默认值是 1
        //         children: [
        //           '/css/c-aaa',
        //           '/css/c-bbb',
        //           '/css/c-ccc',
        //         ]
        //     },
        // ],
        sidebar: {
            '/css/': [
                'c-aaa',
                'c-bbb',
                'c-ccc',
            ],
            '/javascript/': [
                'j-aaa',
                'j-bbb',
                'j-ccc',
            ],
        },
    }
  }