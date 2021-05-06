---
title: 十大经典排序算法-冒泡排序
sidebar: auto
---
<style>
    .go-to-top {
        display: block !important;
    }
</style>

## 2021年03月16日的更新
>本文转载和摘抄于[十大经典排序算法-冒泡排序](https://sort.hust.cc/1.bubblesort)，著作权属原作者[hustcc](https://github.com/hustcc)所有，本人除了学习和参考之外，不对此进行任何商业行为，且如有侵权必删。

## 冒泡排序
---

冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。  

作为最简单的排序算法之一，冒泡排序给我的感觉就像 Abandon 在单词书里出现的感觉一样，每次都在第一页第一位，所以最熟悉。冒泡排序还有一种优化算法，就是立一个 flag，当在一趟序列遍历中元素没有发生交换，则证明该序列已经有序。但这种改进对于提升性能来说并没有什么太大作用。  

### 1. 算法步骤
1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
3. 针对所有的元素重复以上的步骤，除了最后一个。
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

### 2. 动图演示
<img class="custom" :src="$withBase('/assets/img/bubbleSort/bubbleSort.gif')" alt="img" style="margin:0 auto; display:block;">
<div style="color: gray; margin: 0px auto; text-align: center;">动图演示</div>

### 3. 什么时候最快
当输入的数据已经是正序时。

### 4. 什么时候最慢
当输入的数据是反序时。

### 5. JavaScript代码
```JavaScript
// 声明一个数组
let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// 两个for循环方法
function bubbleSort(arr) {
    let len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                var temp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// forEach方法
function bubbleSort(arr) {
    let len = arr.length;
    arr.forEach(() => {
        for(let i = 0; i < len; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
            }
        }
    });
    return arr;
}

// 调用
bubbleSort(arr);
```