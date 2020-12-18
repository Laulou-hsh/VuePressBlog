module.exports = [
    ['link', { rel: 'icon', href: 'docs/.vuepress/public/assets/img/favicon.ico' }],
    ['meta', { name: 'keywords', content: '捞佬', }],
    ['meta', { name: 'keywords', content: 'vuepress 介绍，vuepress 说明', }],
    ['link', { rel: 'manifest', href: 'docs/.vuepress/public/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: 'docs/.vuepress/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: 'docs/.vuepress/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['link', { rel: 'android-chrome', href: 'docs/.vuepress/icons/android-chrome-192x192.png' }],
    ['meta', { name: 'msapplication-TileImage', content: 'docs/.vuepress/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'baidu-site-verification', content: 'code-dUku6JsNiP' }],//<meta name="baidu-site-verification" content="code-dUku6JsNiP" />
    ['script', {}, `
        var _hmt = _hmt || [];
        (function(){
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?44bea867dad4fb58d2dc31ccdd2dc7ca";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
            // 引入谷歌,不需要可删除这段
            var hm1 = document.createElement("script");
            hm1.src = "https://www.googletagmanager.com/gtag/js?id=G-YQ56TY8RCQ";
            var s1 = document.getElementsByTagName("script")[0]; 
            s1.parentNode.insertBefore(hm1, s1);
        })();

        // 谷歌加载,不需要可删除
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YQ56TY8RCQ');
    `
    ],
]