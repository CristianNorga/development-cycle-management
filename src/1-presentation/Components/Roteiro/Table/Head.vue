<script setup lang="ts">

</script>

<template>
  <div class="position-sticky row roteiro-table--head">
    <RoteiroTableHeadColumn area="Orden" />
    <RoteiroTableHeadColumn area="Area" />
    <RoteiroTableHeadColumn area="Tarea" />
    <RoteiroTableHeadColumn area="Contenido" />
    <RoteiroTableHeadColumn area="Servicio" />
    <RoteiroTableHeadColumn area="Dependencias" />
    <RoteiroTableHeadColumn area="Estado" />
  </div>
</template>

<style scoped lang="scss">
.roteiro-table {
  &--head {
    z-index: 1;
    top: 10px;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: rgb(229 231 235 / 1);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1), 0 0 #0000;
    color: #000000;
    background-color: #ffffff;
    z-index: 2;
  }
}
</style>