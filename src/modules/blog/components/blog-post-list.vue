<script setup lang="ts">
interface Props {
  posts: Post[];
}

defineProps<Props>()
</script>

<template>
  <ul class="blog-post-list">
    <li
      v-for="post of posts"
      :key="post.id"
      class="blog-post-list__item"
    >
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </li>
  </ul>
</template>
