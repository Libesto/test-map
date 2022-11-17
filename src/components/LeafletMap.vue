<template>
  <div class="container" ref="container"/>
</template>

<script>
import {ref, onMounted, nextTick} from 'vue';
import 'leaflet/dist/leaflet.js';
import 'leaflet/dist/leaflet.css';
import stc from 'string-to-color';

export default {
  setup() {
    const container = ref();
    onMounted(async () => {
      const map = window.L.map(container.value).setView([40, 40], 6);
      const tiles = window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      const areas = await (await fetch('https://raw.githubusercontent.com/alpers/Turkey-Maps-GeoJSON/master/tr-cities-airports.json')).json();

      window.L.geoJSON(areas, {
        style: feature => ({
          fillColor: feature.properties.color || stc(feature.properties.name),
          color: 'rgba(0, 0, 0, 0.3)',
          weight: 1
        }),
        filter: feature => feature.geometry.type !== 'Point',
        onEachFeature: (feature, layer) => layer.bindTooltip(feature.properties.name, {opacity: 0.8, direction: 'top'})
      }).addTo(map);
    });

    return {
      container
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 80%;
  height: 400px;
  margin: auto;

  :deep(path) {
    outline: none;

    &:hover {
      fill-opacity: 0.5;
      stroke: rgba(0, 0, 0, 0.9);
    }

    &:focus {
      fill-opacity: 0.7;
      stroke: rgba(0, 0, 0, 0.9);
      stroke-width: 2;
    }
  }
}
</style>
