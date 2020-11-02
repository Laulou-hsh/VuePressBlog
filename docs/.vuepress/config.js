// .vuepress/config.js
module.exports = {
    themeConfig: {
        logo: '/assets/img/hero.png',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about/' },
          //导航栏
          {
              text: 'Languages',
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
          { text: 'External', link: 'https://google.com' },
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