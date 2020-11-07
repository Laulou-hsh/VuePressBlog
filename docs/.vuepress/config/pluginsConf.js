const moment = require('moment');
moment.locale("zh-cn");
module.exports = {
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
    //置顶
    '@vuepress/back-to-top': true,
    //Google Analytics
    '@vuepress/google-analytics':
    {
      'ga': 'G-YQ56TY8RCQ'
    },
}