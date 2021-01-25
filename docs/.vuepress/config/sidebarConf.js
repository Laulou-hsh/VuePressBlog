module.exports = {
    '/html/': [
        {
            title: 'HTML',
            path: '/html/',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/',
                'html-introdution',
            ]
        }
    ],
    '/css/': [
        {
            title: 'CSS',   // 必要的
            path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                '/',
                '/css/c-aaa',
                '/css/c-bbb',
                '/css/c-ccc',
            ]
        }
    ],
    '/javascript/': [
        {
            title: 'Javascript',   // 必要的
            path: '/javascript/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/',
                '/javascript/j-aaa',
                {
                    title: 'Javascript',   // 必要的
                    path: '/javascript/j-aaa/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 2,  
                    children: [
                        '/javascript/j-aaa/j-aaa.md',
                    ],
                },
                '/javascript/j-bbb',
                '/javascript/j-ccc',
                {
                    title: '日常笔记',
                    path: '/javascript/DailyNote/',
                    collapsable: true,
                    siderbar: 2,
                    children: [
                        '/javascript/DailyNote/20201223.md',
                        '/javascript/DailyNote/20210115.md',
                    ]
                }
            ]
        },
    ],
    '/interview/': [
        {
            title: '面试题',
            path: '/interview/',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/',
                '/interview/20201127',
                {
                    title: 'Vue系列',
                    path: '/interview/VueSeries/',
                    collapsable: true,
                    siderbar: 2,
                    children: [
                        '/interview/VueSeries/20201201',
                        '/interview/VueSeries/20210125',
                    ]
                },
                {
                    title: 'ES6系列',
                    path: '/interview/ES6/',
                    collapsable: true,
                    siderbar: 2,
                    children: [
                        '/interview/ES6/20210112',
                        '/interview/ES6/20210120',
                    ]
                },
            ]  
        }
    ],
        // {
        //     title: 'CSS',   // 必要的
        //     path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //     collapsable: false, // 可选的, 默认值是 true,
        //     sidebarDepth: 1,    // 可选的, 默认值是 1
        //     children: [
        //         '/css/c-aaa',
        //         '/css/c-bbb',
        //         '/css/c-ccc',
        //     ]
        // },
        // {
        //     title: 'Javascript',   // 必要的
        //     path: '/javascript/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //     collapsable: false, // 可选的, 默认值是 true,
        //     sidebarDepth: 1,    // 可选的, 默认值是 1
        //     children: [
        //         '/javascript/j-aaa',
        //         {
        //             title: 'Javascript',   // 必要的
        //             path: '/javascript/j-aaa/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //             collapsable: true, // 可选的, 默认值是 true,
        //             sidebarDepth: 2,  
        //             children: [
        //                 '/javascript/j-aaa/j-aaa.md',
        //             ],
        //         },
        //         '/javascript/j-bbb',
        //         '/javascript/j-ccc',
        //     ]
        // },
}