<template>
  <div class="container">
    <h1>Page 1</h1>
    <Map />
  </div>
</template>

<script>
import Map from '@/components/Map.vue';

export default {
  components: {Map}
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
</style>