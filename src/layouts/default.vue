<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
  <header>
    <form>
      <select v-model="locale">
        <option value="en">
          en
        </option>
        <option value="fr">
          fr
        </option>
      </select>
    </form>
  </header>
  <main>
    <slot />
  </main>
  <footer>
    Footer
  </footer>
</template>
