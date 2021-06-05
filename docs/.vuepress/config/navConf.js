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
            { text: '科普', items: [/*  */
                { text: '思维实验室', link: 'https://space.bilibili.com/14583962/' },
                { text: '柴知道', link: 'https://space.bilibili.com/26798384/' },
                { text: '所长林超', link: 'https://space.bilibili.com/520155988/' },
            ] },
            { text: '时政', items: [/*  */
                { text: '沈逸老师', link: 'https://space.bilibili.com/648113003' },
                { text: '陈平老师', link: 'https://space.bilibili.com/526559715/' },
                { text: '翟东升老师', link: 'https://space.bilibili.com/596299260/' },
                { text: '唐毅南老师', link: 'https://space.bilibili.com/689259630/' },
            ] }
        ]
    },
    { text: '其他拓展', link: 'https://google.com' },
    { text: 'About', link: '/about/' },
    { text: 'Github', link: 'https://github.com/githubsgeek/VuePressBlog' },
]