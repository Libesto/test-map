<template>
  <nav class="navigation">
    <RouterLink to="/">Home</RouterLink>
    |
    <RouterLink to="/page-1">Page 1</RouterLink>
    |
    <RouterLink to="/page-2">Page 2</RouterLink>
  </nav>

  <RouterView />
</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router';
</script>

<style lang="scss" scoped>
.navigation {
  text-align: center;
  margin-top: 10px;
}
</style>