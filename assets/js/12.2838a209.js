(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{529:function(e,s,t){},600:function(e,s,t){"use strict";t(529)},653:function(e,s,t){"use strict";t.r(s);t(600);var a=t(5),o=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"_2020年11月27日的更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2020年11月27日的更新"}},[e._v("#")]),e._v(" 2020年11月27日的更新")]),e._v(" "),t("blockquote",[t("p",[e._v("本文转载和摘抄于微信公众号“前端瓶子君”的文章"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/Dyjb7DZBqTsykIdOTZxTPg",target:"_blank",rel:"noopener noreferrer"}},[e._v("【面试】764高频前端开发面试问题及答案整理"),t("OutboundLink")],1),e._v("，本人除了转载不对此进行任何商业行为。")])]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"说说你对闭包的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说说你对闭包的理解"}},[e._v("#")]),e._v(" "),t("strong",[e._v("说说你对闭包的理解")])]),e._v(" "),t("p",[e._v("使用闭包主要是为了设计私有的方法和变量。")]),e._v(" "),t("p",[e._v("闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。")]),e._v(" "),t("p",[e._v("闭包有三个特性：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1.函数嵌套函数\n2.函数内部可以引用外部的参数和变量\n3.参数和变量不会被垃圾回收机制回收\n")])])]),t("hr"),e._v(" "),t("h3",{attrs:{id:"请你谈谈cookie的弊端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请你谈谈cookie的弊端"}},[e._v("#")]),e._v(" "),t("strong",[e._v("请你谈谈Cookie的弊端")])]),e._v(" "),t("p",[t("code",[e._v("cookie")]),e._v("虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的。")]),e._v(" "),t("p",[e._v("第一：每个特定的域名下最多生成20个 "),t("code",[e._v("cookie")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1.IE6或更低版本最多20个cookie\n2.IE7和之后的版本最后可以有50个cookie。\n3.Firefox最多50个cookie\n4.chrome和Safari没有做硬性限制\n")])])]),t("p",[t("code",[e._v("IE")]),e._v(" 和 "),t("code",[e._v("Opera")]),e._v(" 会清理近期最少使用的 "),t("code",[e._v("cookie")]),e._v("，"),t("code",[e._v("Firefox")]),e._v(" 会随机清理"),t("code",[e._v("cookie")]),e._v("。")]),e._v(" "),t("p",[t("code",[e._v("cookie")]),e._v(" 的最大大约为"),t("code",[e._v("4096")]),e._v("字节，为了兼容性，一般不能超过"),t("code",[e._v("4095")]),e._v("字节。")]),e._v(" "),t("p",[t("code",[e._v("IE")]),e._v(" 提供了一种存储可以持久化用户数据，叫做 "),t("code",[e._v("userdata")]),e._v("，从 "),t("code",[e._v("IE5.0")]),e._v(" 就开始支持。每个数据最多 "),t("code",[e._v("128K")]),e._v("，每个域名下最多 "),t("code",[e._v("1M")]),e._v("。\n这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。")]),e._v(" "),t("h4",{attrs:{id:"优点-极高的扩展性和可用性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点-极高的扩展性和可用性"}},[e._v("#")]),e._v(" "),t("strong",[e._v("优点：极高的扩展性和可用性")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1.通过良好的编程，控制保存在cookie中的session对象的大小。\n2.通过加密和安全传输技术（SSL），减少cookie被破解的可能性。\n3.只在cookie中存放不敏感数据，即使被盗也不会有重大损失。\n4.控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。\n")])])]),t("h4",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[e._v("#")]),e._v(" "),t("strong",[e._v("缺点：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1.`Cookie`数量和长度的限制。每个domain最多只能有20条cookie，\n每个cookie长度不能超过4KB，否则会被截掉。\n2.安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。\n即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。\n3.有些状态不可能保存在客户端。\n例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。\n如果我们把这个计数器保存在客户端，那么它起不到任何作用。\n")])])]),t("hr"),e._v(" "),t("h3",{attrs:{id:"浏览器本地存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器本地存储"}},[e._v("#")]),e._v(" "),t("strong",[e._v("浏览器本地存储")])]),e._v(" "),t("p",[e._v("在较高版本的浏览器中，"),t("code",[e._v("js")]),e._v(" 提供了 "),t("code",[e._v("sessionStorage")]),e._v(" 和 "),t("code",[e._v("globalStorage")]),e._v(" 。在HTML5中提供了 "),t("code",[e._v("localStorage")]),e._v(" 来取代globalStorage。")]),e._v(" "),t("p",[e._v("html5中的 "),t("code",[e._v("Web Storage")]),e._v(" 包括了两种存储方式："),t("code",[e._v("sessionStorage")]),e._v(" 和 "),t("code",[e._v("localStorage")]),e._v(" 。")]),e._v(" "),t("p",[t("code",[e._v("sessionStorage")]),e._v(" 用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此 "),t("code",[e._v("sessionStorage")]),e._v(" 不是一种持久化的本地存储，仅仅是会话级别的存储。")]),e._v(" "),t("p",[e._v("而 "),t("code",[e._v("localStorage")]),e._v(" 用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_2020-12-10的更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2020-12-10的更新"}},[e._v("#")]),e._v(" 2020/12/10的更新")]),e._v(" "),t("h3",{attrs:{id:"web-storage和cookie的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-storage和cookie的区别"}},[e._v("#")]),e._v(" "),t("strong",[e._v("web storage和cookie的区别")])]),e._v(" "),t("p",[t("code",[e._v("Web Storage")]),e._v(" 的概念和 "),t("code",[e._v("cookie")]),e._v(" 相似，区别是它是为了更大容量存储设计的。"),t("code",[e._v("Cookie")]),e._v(" 的大小是受限的，并且每次你请求一个新的页面的时候 "),t("code",[e._v("Cookie")]),e._v(" 都会被发送过去，这样无形中浪费了带宽，另外 "),t("code",[e._v("cookie")]),e._v(" 还需要指定作用域，不可以跨域调用。")]),e._v(" "),t("p",[e._v("除此之外，"),t("code",[e._v("Web Storage")]),e._v(" 拥有 "),t("code",[e._v("setItem,getItem,removeItem,clear")]),e._v(" 等方法，不像 "),t("code",[e._v("cookie")]),e._v(" 需要前端开发者自己封装 "),t("code",[e._v("setCookie，getCookie")]),e._v(" 。")]),e._v(" "),t("p",[e._v("但是 "),t("code",[e._v("cookie")]),e._v(" 也是不可以或缺的："),t("code",[e._v("cookie")]),e._v(" 的作用是与服务器进行交互，作为 "),t("code",[e._v("HTTP")]),e._v(" 规范的一部分而存在 ，而 "),t("code",[e._v("Web Storage")]),e._v(" 仅仅是为了在本地“存储”数据而生")]),e._v(" "),t("p",[e._v("浏览器的支持除了 "),t("code",[e._v("IE７")]),e._v(" 及以下不支持外，其他标准浏览器都完全支持(IE及FireFox需在web服务器里运行)，值得一提的是IE总是办好事，例如IE7、IE6中的 "),t("code",[e._v("userData")]),e._v(" 其实就是 "),t("code",[e._v("Javascript")]),e._v(" 本地存储的解决方案。通过简单的代码封装可以统一到所有的浏览器都支持 "),t("code",[e._v("web storage")]),e._v(" 。")]),e._v(" "),t("p",[t("code",[e._v("localStorage")]),e._v(" 和 "),t("code",[e._v("sessionStorage")]),e._v(" 都具有相同的操作方法，例如 "),t("code",[e._v("setItem、getItem和removeItem")]),e._v(" 等。")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"cookie-和session-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie-和session-的区别"}},[e._v("#")]),e._v(" "),t("strong",[e._v("cookie 和session 的区别：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1、cookie数据存放在客户的浏览器上，session数据放在服务器上。\n2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗。\n考虑到安全应当使用session。\n3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能。\n考虑到减轻服务器性能方面，应当使用COOKIE。\n4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。\n5、所以个人建议：\n将登陆信息等重要信息存放为SESSION；\n其他信息如果需要保留，可以放在COOKIE中。\n")])])]),t("hr"),e._v(" "),t("h2",{attrs:{id:"css-相关问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-相关问题"}},[e._v("#")]),e._v(" "),t("strong",[e._v("CSS 相关问题")])]),e._v(" "),t("h3",{attrs:{id:"display-none和visibility-hidden的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#display-none和visibility-hidden的区别"}},[e._v("#")]),e._v(" "),t("strong",[e._v("display:none和visibility:hidden的区别？")])]),e._v(" "),t("div",{staticClass:"language-JavaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("display"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("  隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。\n\nvisibility"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("hidden"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("  隐藏对应的元素，但是在文档布局中仍保留原来的空间。\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h3",{attrs:{id:"css中-link-和-import-的区别是"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css中-link-和-import-的区别是"}},[e._v("#")]),e._v(" "),t("strong",[e._v("CSS中 link 和@import 的区别是？")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("(1) link属于HTML标签，而@import是CSS提供的; \n(2) 页面被加载的时，link会同时被加载，\n    而@import引用的CSS会等到页面被加载完再加载;\n(3) import只在IE5以上才能识别，而link是HTML标签，无兼容问题; \n(4) link方式的样式的权重 高于@import的权重。\n")])])]),t("h3",{attrs:{id:"position-absolute和float属性的异同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#position-absolute和float属性的异同"}},[e._v("#")]),e._v(" "),t("strong",[e._v("position:absolute和float属性的异同")])]),e._v(" "),t("div",{staticClass:"language-JavaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("A")]),e._v("：共同点：\n    对内联元素设置"),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("float")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),e._v("和"),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("absolute")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),e._v("属性，可以让元素脱离文档流，并且可以设置其宽高。\n\n    "),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("B")]),e._v("：不同点：\n    float仍会占据位置，position会覆盖文档流中的其他元素。\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("hr")])}),[],!1,null,null,null);s.default=o.exports}}]);