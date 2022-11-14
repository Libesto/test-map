<template>
  <ol-map class="container" loadTilesWhileAnimating loadTilesWhileInteracting>
    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector :url="url" :format="geoJson" :projection="projection" />

      <ol-style>
        <ol-style-stroke color="rgba(0,0,0,0.25)" :width="1" />
        <ol-style-fill color="rgba(255,255,255,0.2)" />
      </ol-style>
    </ol-vector-layer>

    <ol-interaction-select :condition="pointerMove" :filter="hover">
      <ol-style :zIndex="1">
        <ol-style-stroke color="rgba(0,0,0,0.9)" :width="1" />
        <ol-style-fill color="rgba(255,255,255,0.6)"></ol-style-fill>
      </ol-style>
    </ol-interaction-select>

    <ol-interaction-select @select="show" :condition="click">
      <ol-style :zIndex="1">
        <ol-style-stroke color="rgba(0,0,0,0.9)" :width="2" />
        <ol-style-fill color="rgba(255,255,255,0.7)"></ol-style-fill>
      </ol-style>
    </ol-interaction-select>
  </ol-map>
</template>

<script>
import {ref, inject} from 'vue';

export default {
  setup() {
    const center = ref([40, 40]);
    const projection = ref('EPSG:4326');
    const zoom = ref(8);
    const rotation = ref(0);

    const format = inject('ol-format');
    const geoJson = new format.GeoJSON();
    const url = ref('https://raw.githubusercontent.com/alpers/Turkey-Maps-GeoJSON/master/tr-cities-airports.json');

    const selectConditions = inject('ol-selectconditions');
    const pointerMove = selectConditions.pointerMove;
    const click = selectConditions.click;

    const openWindow = feature => {
      console.log('open', feature);
      // TODO: open window with data
    };
    const closeWindow = () => {
      console.log('close');
      // TODO: close window with data
    };

    const showing = ref('');
    const hover = feature => feature?.ol_uid !== showing.value;
    const show = event => {
      showing.value = event.selected?.[0]?.ol_uid || '';
      showing.value
          ? openWindow(event.selected[0])
          : closeWindow();
    }

    return {
      center,
      projection,
      zoom,
      rotation,
      url,
      geoJson,
      pointerMove,
      click,
      hover,
      showing,
      show
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 80%;
  height: 400px;
  margin: auto;
}
</style>
