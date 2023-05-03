<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(item => item.code !== locale.value)
})
</script>

<template>
  <a
    v-for="locale in availableLocales"
    :key="locale.code"
    :href="switchLocalePath(locale.code)"
  >
    {{ locale.name }}
  </a>
</template>
