---
title: 十大经典排序算法-选择排序
sidebar: auto
---
<style>
    .go-to-top {
        display: block !important;
    }
</style>

## 2021年05月09日的更新
>本文转载和摘抄于[十大经典排序算法-选择排序](https://sort.hust.cc/2.selectionsort)，著作权属原作者[hustcc](https://github.com/hustcc)所有，本人除了学习和参考之外，不对此进行任何商业行为，且如有侵权必删。

## 选择排序
---
选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。

### 1. 算法步骤
1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
3. 重复第二步，直到所有元素均排序完毕。

### 2. 动图演示
<img class="custom" :src="$withBase('/assets/img/selectionSort/selectionSort.gif')" alt="img" style="margin:0 auto; display:block;">
<div style="color: gray; margin: 0px auto; text-align: center;">动图演示</div>

### 3. JavaScript代码
```JavaScript
// 声明一个数组
let arr = [3,44,39,5,47,15,36,26,27,46,38,19,50,48];
function selectionSort(arr) {
    let len = arr.length;
    let minIndex, temp;
    // 两个for循环方法
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        // ES5
        temp = arr[index];
        arr[index] = arr[minIndex];
        arr[minIndex] = temp;
        // ES6
        // [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]];
    }

    // forEach方法
    arr.forEach((item,index) => {
        minIndex = index;
        for (let j = index + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        // ES5
        temp = arr[index];
        arr[index] = arr[minIndex];
        arr[minIndex] = temp;
        // ES6
        // [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]];
    });
    return arr;
}
// 调用
selectionSort(arr);
```

