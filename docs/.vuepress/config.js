const headConf = require('./config/headConf');
const pluginsConf = require('./config/pluginsConf');
const navConf = require('./config/navConf');
const sidebarConf = require('./config/sidebarConf');
const moment = require('moment');
moment.locale("zh-cn");
// .vuepress/config.js
module.exports = {
    title: "捞佬",
    description: "捞佬的笔记",
    head: headConf,
    plugins: pluginsConf,
    themeConfig: {
        activeHeaderLinks: false,
        lastUpdated: '更新时间', // string | boolean
        logo: '/assets/img/hero.png',
        nav: navConf,
        //侧边栏
        // sidebar: [
        //     '/',
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
        //     {
        //         title: 'JavaScript',   // 必要的
        //         path: '/javascript/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 1,    // 可选的, 默认值是 1
        //         children: [
        //             'j-aaa',
        //             'j-bbb',
        //             'j-ccc',
        //         ]
        //     },
        // ],
        sidebar: sidebarConf,
    }
  }