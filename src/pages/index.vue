<script setup lang="ts">
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
    </form>
    <h1>{{ $t('welcome') }}</h1>
  </div>
</template>
