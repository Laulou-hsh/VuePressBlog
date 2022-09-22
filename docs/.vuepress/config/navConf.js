module.exports = [
    { text: 'Home', link: '/' },
    { text: 'HTML', link: '/html/' },
    { text: 'CSS', link: '/css/'},
    {   text: 'JavaScript',
        items: [
            {text: 'JS介绍和基础', link: '/javascript/'},
            {text: 'JS学习笔记', link: '/javascript/DailyNote/'},
            {text: 'JS算法', link: '/javascript/algorithm/'},

        ]
    },
    { text: '面试', link: '/interview/'},
    //导航栏
    {
        text: 'B站学习',
        items: [
            { text: '科普', items: [
                { text: '思维实验室', link: 'https://space.bilibili.com/14583962/' },
                { text: '柴知道', link: 'https://space.bilibili.com/26798384/' },
                { text: '赛雷三分钟', link: 'https://space.bilibili.com/26108626/' },
                { text: '峰华前端工程师', link: 'https://space.bilibili.com/302954484/' },
            ] },
            { text: '时政', items: [
                { text: '沈逸老师', link: 'https://space.bilibili.com/648113003' },
            ] }
        ]
    },
    { text: '其他拓展', link: 'https://google.com' },
    { text: 'About', link: '/about/' },
    { text: 'Github', link: 'https://github.com/githubsgeek/VuePressBlog' },
]