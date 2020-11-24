---
title: HTML简介
sidebar: auto
---

# HTML简介

## 实例解析
+ `<!DOCTYPE html>` 声明为 HTML5 文档
+ `<html>` 元素是 HTML 页面的根元素
+ `<head>` 元素包含了文档的元（meta）数据，如 `<meta charset="utf-8">` 定义网页编码格式为 utf-8。
+ `<title>` 元素描述了文档的标题
+ `<body>` 元素包含了可见的页面内容
+ `<h1>`元素定义一个大标题
+ `<p>`元素定义一个段落

注：在浏览器的页面上使用键盘上的 F12 按键开启调试模式，就可以看到组成标签。

***

## 什么是HTML？
HTML 是用来描述网页的一种语言。
+ HTML 指的是超文本标记语言: **H**yper**T**ext **M**arkup **L**anguage
+ HTML 不是一种编程语言，而是一种**标记**语言
+ 标记语言是一套**标记标签** (markup tag)
+ HTML 使用标记标签来**描述**网页
+ HTML 文档包含了HTML **标签**及**文本**内容
+ HTML文档也叫做 **web 页面**

***

## HTML 标签
HTML 标记标签通常被称为 HTML 标签 (HTML tag)。

+ HTML 标签是由*尖括号*包围的关键词，比如 `<html>`
+ HTML 标签通常是*成对出现* 的，比如 `<b>` 和 `</b>`
+ 标签对中的第一个标签是*开始标签*，第二个标签是*结束标签*
+ 开始和结束标签也被称为*开放标签* 和*闭合标签*
<div style="width:610px;border:1px solid lightgray;font-size:20px;padding:10px">
    <span style="color:#4ABF8A">< 标签 ></span>
    内容
    <span style="color:#4ABF8A"> < /标签 ></span>
</div>

***

## HTML 元素
"HTML 标签" 和 "HTML 元素" 通常都是描述同样的意思.

但是严格来讲, 一个 HTML 元素包含了开始标签与结束标签，如下实例:

HTML 元素:
<div style="width:610px;border:1px solid lightgray;font-size:20px;padding:10px">
    <span style="color:#4ABF8A">< p ></span>
    这是一个段落
    <span style="color:#4ABF8A"> < /p ></span>
</div>

***