<script setup lang="ts">
definePageMeta({
  layout: 'empty'
})
</script>

<template>
  <div class="error">
    <h1 class="code">
      404
    </h1>
    <p class="message">
      Page not found
    </p>
    <button @click="navigateTo({ name: 'index' })">
      Back to home
    </button>
  </div>
</template>
