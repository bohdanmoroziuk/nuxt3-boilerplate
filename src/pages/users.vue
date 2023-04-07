<script setup lang="ts">
const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@gmail.com'
  },
  {
    id: '2',
    name: 'Kaneki Ken',
    email: 'kaneki.ken@gmail.com'
  }
]
</script>

<template>
  <div class="users">
    <UserList :users="users" />
  </div>
</template>
