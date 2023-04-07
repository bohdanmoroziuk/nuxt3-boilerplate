<script setup lang="ts">
const counterStore = useCounterStore()

const { count } = storeToRefs(counterStore)
</script>

<template>
  <div class="counter">
    <button @click="counterStore.decrement">
      -
    </button>
    <p>{{ count }}</p>
    <button @click="counterStore.increment">
      +
    </button>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  column-gap: 8px;
}
</style>
<style scoped>
.counter {
  display: flex;
  align-items: center;
  column-gap: 8px;
}
</style>
