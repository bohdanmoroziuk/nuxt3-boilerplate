<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="layout">
    <header class="header">
      <Container>
        <h2>Header</h2>
        <LocaleSwitch />
      </Container>
    </header>
    <main class="main">
      <Container>
        <slot />
      </Container>
    </main>
    <footer class="footer">
      <Container>
        <p>{{ currentYear }}</p>
      </Container>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header,
.main,
.footer {
  padding: 12px 0;
}

.main {
  flex: 1;
}

.header {
  border-bottom: 1px solid gainsboro;
}

.footer {
  border-top: 1px solid gainsboro;
}
</style>
