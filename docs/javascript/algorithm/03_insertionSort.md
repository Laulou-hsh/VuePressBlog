---
title: 十大经典排序算法-插入排序
sidebar: auto
---
<style>
    .go-to-top {
        display: block !important;
    }
</style>

## 2021年09月01日的更新
>本文转载和摘抄于[十大经典排序算法-插入排序](https://sort.hust.cc/3.insertionsort)，著作权属原作者[hustcc](https://github.com/hustcc)所有，本人除了学习和参考之外，不对此进行任何商业行为，且如有侵权必删。

## 插入排序
---
插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，因为只要打过扑克牌的人都应该能够秒懂。插入排序是一种最简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。  
插入排序和冒泡排序一样，也有一种优化算法，叫做拆半插入。

### 1. 算法步骤
1. 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
2. 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）

---

### 2. 动图演示
<img class="custom" :src="$withBase('/assets/img/insertionSort/insertionSort.gif')" alt="img" style="margin:0 auto; display:block;">
<div style="color: gray; margin: 0px auto; text-align: center;">动图演示</div>

---

### 3. JavaScript 代码实现
```JS
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}
```
