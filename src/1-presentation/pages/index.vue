<script setup lang="ts">
const router = useRouter();

const navigateToRoteiro = () => {
  router.push('/roteiro');
};
</script>

<template>  
  <div class="container-xl">
    <h1>
      Home
    </h1>
    <button @click="navigateToRoteiro">Roteiro</button>
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
