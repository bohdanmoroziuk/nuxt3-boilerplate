<script setup lang="ts">
interface Props {
  users: User[];
}

defineProps<Props>()
</script>

<template>
  <ul class="user-list">
    <li
      v-for="user of users"
      :key="user.id"
      class="user-list__item"
    >
      {{ user.name }} - {{ user.email }}
    </li>
  </ul>
</template>
