<template>
  <div class="container">
    <h1>Home page</h1>
    <div class="container__links">
      <RouterLink class="container__link" to="/page-1">OpenLayers</RouterLink>
      <RouterLink class="container__link" to="/page-2">Leaflet</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  text-align: center;

  &__links {
    display: flex;
    justify-content: center;
  }

  &__link {
    display: block;
    font-size: 22px;
    margin: 0 10px;
  }
}
</style>
