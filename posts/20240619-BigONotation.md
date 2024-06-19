---
title: "BigO"
date: "2024-06-19"
thumbnail: "https://github.com/byuul/leetcode/assets/149779257/28611718-85cb-4688-af12-d973024eeac7"
description: "Big O Notation"
---

### Big O 표기법의 필요성

-   숫자로 코드의 성능을 표기 === 빅오 형식으로 표기
-   비효율적인 코드의 문제를 찾기 쉽다.
-   코드를 더 잘 이해하고, 더 좋은 코드를 쓰기 위해 필요

E.g Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n

3 = 1 + 2 + 3

```js
// Solution 1
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total = total + i;
    }

    return total;
}
```

```js
// Solution 2
function addUpTo(n) {
    return (n * (n + 1)) / 2;
}
```

두 코드의 속도 차를 구하기

```js
let t1 = performance.now();
console.log(addUpTo(100000));
let t2 = performance.now(2);

console.log(`time elapsed : ${(t2 - t1) / 1000} seconds.`);
```

이런 식으로 불확실하게 시간 차를 구하기엔 한계가 있다.
기기 사양에 따라 다를 수도 있고, 무엇을 실행하고 있냐에 따라 다를 수 있다.

이를 위해 `Big O` 표기법을 사용한다.

BigO = 입력의 크기와 실행시간의 관계, N의 값이 커질 수록 실행 시간이 늘어난다
입력값 n이 커질수록 알고리즘이 얼마나 효율적인지 표현하는 방식이란것을 기억한다.

O(n) => n이 커질수록 비례하게 실행 시간이 늘어남
O(n2) => 실행 시간이 대략 n 제곱으로 늘어남

-

### Big O Shorthands

1. 산수는 상수 (덧셈, 뺄셈, 곱셈, 나눗셈 포함, n의 값도 상관 없다.)
2. 변수 배정도 상수. (x=1000, x=20000을 처리하든 100만을 처리하는 것은 비슷한 시간이 걸린다)
3. 인덱스를 사용해서 배열 엘리멘트에 접근하면 그것도 실행 시간은 상수다.
4. 루프가 있으면 복잡도가 루프의 길이 곱하기 루프 안에 있는 연산들이 된다. 그렇기 떄문에 리스트에 있는 데이터를 프로 처리할 떄 0에서 n까지 간다면, n이 커질 수록 루프 반복된느 횟수가 늘어간다. = n제곱 실행시간

-

Recap

1. 알고리즘의 성능을 분석하기 위해서는 biG o 표기법을 사용한다.
2. 빅오를 통해 시간 복잡도와 공간 복잡도에 대한 이해를 높일 수 있다.
3. 빅오로 측정되는 알고리즘의 시간과 공간 복잡도는 하드웨어에 영향을 받지 않는다.
