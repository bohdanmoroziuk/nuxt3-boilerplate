<script setup lang="ts">
const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
  <q-layout view="lHh LpR lFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Nuxt 3 Boilerplate
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered>
      <q-list separator>
        <q-item v-ripple clickable to="/">
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item v-ripple clickable to="/tables">
          <q-item-section>Tables</q-item-section>
        </q-item>
        <q-item v-ripple clickable to="/forms">
          <q-item-section>Forms</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="q-pa-md">
        <slot />
      </q-page>
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white q-pa-sm">
      <p class="q-mb-none">
        2023
      </p>
    </q-footer>
  </q-layout>
</template>
