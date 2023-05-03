<script setup lang="ts">
const { x, y } = useMouse()

const { locale } = useI18n()
</script>

<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">
          en
        </option>
        <option value="fr">
          fr
        </option>
      </select>
      <p>{{ $t('welcome') }}</p>
    </form>
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
