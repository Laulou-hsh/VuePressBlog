module.exports = [
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
]