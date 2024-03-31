<script setup lang="ts">
const router = useRouter();


</script>

<template>  
  <div class="container-xl">
    <h1>
      Home
    </h1>
    <button @click="router.push('/roteiro')">Roteiro</button>
    <button @click="router.push('/service')">Servicios</button>
  </div>
</template>

<style scoped>
body {
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9fafb;
}
</style>
