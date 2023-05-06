<script setup lang="ts">
definePageMeta({
  layout: 'empty'
})
</script>

<template>
  <div class="flex flex-center column error">
    <h1 class="q-mb-md">
      404
    </h1>
    <p>
      Page not found
    </p>
    <q-btn color="primary" @click="navigateTo('/')">
      Back to home
    </q-btn>
  </div>
</template>
