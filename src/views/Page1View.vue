<template>
  <div class="container">
    <h1>Using OpenLayers</h1>
    <OpenLayersMap />
  </div>
</template>

<script>
import OpenLayersMap from '@/components/OpenLayersMap.vue';

export default {
  components: {OpenLayersMap}
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
</style>