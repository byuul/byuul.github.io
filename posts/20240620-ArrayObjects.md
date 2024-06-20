---
title: "배열과 오브젝트의 성능 평가"
date: "2024-06-20"
thumbnail: "https://github.com/byuul/leetcode/assets/149779257/28611718-85cb-4688-af12-d973024eeac7"
description: "Big O Notation"
---

## 배열, 오브젝트, 내장된 메서드와 루프들의 성능은 얼마나 좋은가?

### 객체의 빅오

```js
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4],
};
```

#### 오브젝트를 언제 쓰는가?

-   정렬되어 있을 필요가 없을 때
-   빠른 접근, 입력과 제거를 원할 때

#### 오브젝트의 빅 오(Big O)

Insertion - O(1)

Removal - O(1)

Searching - O(N)

Access - O(1)

--

#### 오브젝트 메서드의 빅 오(Big O)

Object.keys - O(N)

Object.values - O(N)

Object.entries - O(N)

hasOwnProperty - O(1)

keys,values,entries 메서드들은 O(N) 선형 시간으로 아이템 갯수가 늘어남에따라 각 아이템에 접근해서 배열에 결과 값을 추가해야한다.

--

### 배열의 빅오

```js
let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];
```

#### 배열을 언제 쓰는가?

-   정렬된 데이터가 필요할 때

#### 배열의 빅 오(Big O)

Insertion - 어디에 입력을 하는지에 따라..

Removal - 어디에 입력을 하는지에 따라..

Searching - O(N)

Access - O(1)

--

#### 배열 메서드의 빅 오(Big O)

push - O(1)

pop - O(1)

shfit - O(N)

unshift - O(N)

concat - O(N)

slice - O(N)

splice - O(N)

sort - O(N\*logN)

forEach/map/filter/reduce/etc... - - O(N)
