<script setup lang="ts">
const error = useError()

const errorCode = computed(() => (
  error.value instanceof Error || !error.value
    ? 500
    : error.value.statusCode
))

const errorMessage = computed(() => (
  error.value instanceof Error || !error.value
    ? 'Something went wrong'
    : error.value.statusMessage
))

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="error">
    <h1 class="code">
      {{ errorCode }}
    </h1>
    <p class="message">
      {{ errorMessage }}
    </p>
    <button @click="handleError">
      Back to home
    </button>
  </div>
</template>
