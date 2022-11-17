<template>
  <div class="container">
    <h1>Using Leaflet</h1>
    <LeafletMap />
  </div>
</template>

<script>
import LeafletMap from '@/components/LeafletMap.vue';

export default {
  components: {LeafletMap}
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
</style>