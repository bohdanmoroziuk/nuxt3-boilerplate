<script setup lang="ts">
const { posts } = await useBlogPosts()
</script>

<template>
  <div class="blog">
    <BlogPostList :posts="posts" />
  </div>
</template>
