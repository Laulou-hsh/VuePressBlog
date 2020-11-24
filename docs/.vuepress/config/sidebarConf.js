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
            ]
        },
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