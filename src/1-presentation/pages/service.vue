<script setup lang="ts">
const router = useRouter();

</script>

<template>
<div class="container-xl service">
    <h1>
      <span @click="router.push('/')"> <Icon name="bi:arrow-left"></Icon> </span> Servicio
    </h1>

    <span>filter for service</span>

    <div class="row">
      <div class="col">
        <ServicePresentationMinified />
      </div>

      <div class="col">
        <ServicePresentationMinified />
      </div>

      <div class="col">
        <ServicePresentationMinified />
      </div>

      <div class="col">
        <ServicePresentationMinified />
      </div>

      <div class="col">
        <ServicePresentationMinified />
      </div>

      <div class="col">
        <ServicePresentationMinified />
      </div>

      <div class="col">
        <ServicePresentationMinified />
      </div>

      <div class="col">
        <ServicePresentationMinified />
      </div>
    </div>

</div> 
</template>

<style scoped>

</style>