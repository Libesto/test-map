<template>
  <nav class="navigation">
    <RouterLink to="/">Home</RouterLink>
    |
    <RouterLink to="/page-1">OpenLayers</RouterLink>
    |
    <RouterLink to="/page-2">Leaflet</RouterLink>
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