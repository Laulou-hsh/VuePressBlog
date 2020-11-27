(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{521:function(e,o,a){"use strict";a.r(o);var t=a(6),v=Object(t.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_2020年11月27日的更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020年11月27日的更新"}},[e._v("#")]),e._v(" 2020年11月27日的更新")]),e._v(" "),a("blockquote",[a("p",[e._v("本文转载和摘抄于微信公众号“前端瓶子君”的文章"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/Dyjb7DZBqTsykIdOTZxTPg",target:"_blank",rel:"noopener noreferrer"}},[e._v("【面试】764高频前端开发面试问题及答案整理"),a("OutboundLink")],1),e._v("，本人除了转载不对此进行任何商业行为。")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"说说你对闭包的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说说你对闭包的理解"}},[e._v("#")]),e._v(" "),a("strong",[e._v("说说你对闭包的理解")])]),e._v(" "),a("p",[e._v("使用闭包主要是为了设计私有的方法和变量。")]),e._v(" "),a("p",[e._v("闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。")]),e._v(" "),a("p",[e._v("闭包有三个特性：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1.函数嵌套函数\n2.函数内部可以引用外部的参数和变量\n3.参数和变量不会被垃圾回收机制回收\n")])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"请你谈谈cookie的弊端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请你谈谈cookie的弊端"}},[e._v("#")]),e._v(" "),a("strong",[e._v("请你谈谈Cookie的弊端")])]),e._v(" "),a("p",[a("code",[e._v("cookie")]),e._v("虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的。")]),e._v(" "),a("p",[e._v("第一：每个特定的域名下最多生成20个 "),a("code",[e._v("cookie")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1.IE6或更低版本最多20个cookie\n2.IE7和之后的版本最后可以有50个cookie。\n3.Firefox最多50个cookie\n4.chrome和Safari没有做硬性限制\n")])])]),a("p",[a("code",[e._v("IE")]),e._v(" 和 "),a("code",[e._v("Opera")]),e._v(" 会清理近期最少使用的 "),a("code",[e._v("cookie")]),e._v("，"),a("code",[e._v("Firefox")]),e._v(" 会随机清理"),a("code",[e._v("cookie")]),e._v("。")]),e._v(" "),a("p",[a("code",[e._v("cookie")]),e._v(" 的最大大约为"),a("code",[e._v("4096")]),e._v("字节，为了兼容性，一般不能超过"),a("code",[e._v("4095")]),e._v("字节。")]),e._v(" "),a("p",[a("code",[e._v("IE")]),e._v(" 提供了一种存储可以持久化用户数据，叫做 "),a("code",[e._v("userdata")]),e._v("，从 "),a("code",[e._v("IE5.0")]),e._v(" 就开始支持。每个数据最多 "),a("code",[e._v("128K")]),e._v("，每个域名下最多 "),a("code",[e._v("1M")]),e._v("。\n这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。")]),e._v(" "),a("h4",{attrs:{id:"优点-极高的扩展性和可用性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点-极高的扩展性和可用性"}},[e._v("#")]),e._v(" "),a("strong",[e._v("优点：极高的扩展性和可用性")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1.通过良好的编程，控制保存在cookie中的session对象的大小。\n2.通过加密和安全传输技术（SSL），减少cookie被破解的可能性。\n3.只在cookie中存放不敏感数据，即使被盗也不会有重大损失。\n4.控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。\n")])])]),a("h4",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[e._v("#")]),e._v(" "),a("strong",[e._v("缺点：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1.`Cookie`数量和长度的限制。每个domain最多只能有20条cookie，\n每个cookie长度不能超过4KB，否则会被截掉。\n2.安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。\n即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。\n3.有些状态不可能保存在客户端。\n例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。\n如果我们把这个计数器保存在客户端，那么它起不到任何作用。")])])])])}),[],!1,null,null,null);o.default=v.exports}}]);