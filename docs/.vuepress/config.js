const headConf = require('./config/headConf');
const pluginsConf = require('./config/pluginsConf');
const navConf = require('./config/navConf');
const sidebarConf = require('./config/sidebarConf');
const moment = require('moment');
const vssueConfig = require('./config/vssueConfig');
moment.locale("zh-cn");
// .vuepress/config.js
module.exports = {
    title: "捞佬",
    description: "捞佬的学习和开发博客",
    head: headConf,
    plugins: pluginsConf,
    navbar: true,
    theme: 'reco',
    themeConfig: {
        mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
        activeHeaderLinks: false,
        lastUpdated: '更新时间', // string | boolean
        logo: '/assets/img/hero.png',
        subSidebar: 'auto',
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
        //vssue评论插件
        vssueConfig: vssueConfig,
    }
  }