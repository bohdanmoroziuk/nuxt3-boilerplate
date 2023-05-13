<script setup>
const { locale: currentLocale, locales, setLocaleCookie } = useI18n()

const availableLocales = computed(() => {
  return (locales.value).filter(locale => locale.code !== currentLocale.value)
})

watchEffect(() => {
  setLocaleCookie(currentLocale.value)
})
</script>

<template>
  <NuxtLink
    v-for="locale in availableLocales"
    :key="locale.code"
    :to="switchLocalePath(locale.code)"
  >
    {{ locale.name }}
  </NuxtLink>
</template>
