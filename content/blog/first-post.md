---
title: First Post
short: "I Love this GridSome Project. Awesome Dev Portfolio project one"
date: 10/07/2019
image: "../../src/assets/index.png"
---

## Write markdown things

## You can include images, text and full description About your Project.

```js
<template>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-8">{{ $page.post.date }}</div>
      <div class="markdown-body" v-html="$page.post.content" />
    </div>
</template>
```
