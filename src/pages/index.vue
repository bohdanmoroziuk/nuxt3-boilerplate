<script setup lang="ts">
const { x, y } = useMouse()
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>Mouse position: {{ x }} {{ y }}</p>
    <Counter />
    <q-btn color="primary" label="Primary" />
    <QBtn color="secondary" label="Secondary" />
    <LazyQBtn color="amber" glossy label="Amber" />
    <img
      :src="useAsset('images/cat.jpg')"
      alt="Cat"
      height="240"
    >
  </div>
</template>
