<script setup lang="ts">
interface Props {
  users: User[];
}

defineProps<Props>();
</script>

<template>
  <ul class="user-list">
    <li
      class="user-list__item"
      v-for="user of users"
      :key="user.id"  
    >
      {{ user.name }} - {{ user.email }}
    </li>
  </ul>
</template>
