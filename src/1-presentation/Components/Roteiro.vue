<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'

import Roteiro from '@models/Roteiro.model'

const roteiro = ref({} as Roteiro);

const storeUtils = useUtilsStore();
// const storeRoteiro = useRoteiroStore();

onBeforeMount(async () =>{

  const { data: result } = await useFetch('/api/roteiro');

  if (result.value?.document) {
    roteiro.value = {
      ...result.value.document,
      deploymentDate: new Date(result.value.document.deploymentDate),
    };
  }
  console.log(result.value?.document);
});



// const taskArray = ref(store.tasks);


  // $fetch('/api/task', {
  //   onResponse({ request, response, options }) {
  //     // Process the response data
  //     if (response._data) {
  //       taskArray.value = response._data;

  //       console.log('taskArray.value', response)
  //     }
  //   },
  // });

  
// const selectArea = async (event: any) => {
//   console.log(event);
//   const { data: task } = await useFetch('/api/task', );

//   if (task) {
//     taskArray.value = task.value;
//   }
// };

</script>

<template>
  <div class="container-xl roteiro-table">
    <h1>
      <span> <Icon name="bi:arrow-left"></Icon> </span> Roteiro
    </h1>

    <RoteiroTableHead />

    <h5 class="my-2"># Actividades Previas al Despliegue</h5>
    <!-- <RoteiroTableCell  /> -->

    <VueDraggable ref="el" v-model="roteiro.previusTask">
      <RoteiroTableCell  v-for="(item, index) in roteiro.previusTask" :key="index" :task="item" :index="index"  />
    </VueDraggable>
    
    <h5 class="my-2"># Actividades Durante el Despliegue</h5>

    <h5># Actividades Despues del Despliegue</h5>

    <h5># Actividades a realizar en caso de Rollback</h5>
    <div style="height: 800px;background-color: gray"></div>

  </div>
  <Teleport to="body">
    <div v-if="storeUtils.isModalOpen" class="modal fade show" tabindex="-1" style="display: block;" aria-modal="true" role="dialog">
      <div class="modal-dialog modal-fullscreen-lg-down">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-4" id="exampleModalFullscreenLgLabel">Contenido</h1>
            <button type="button" class="btn-close" aria-label="Close" @click="storeUtils.closeModal()"></button>
          </div>
          <div class="modal-body">
            <div class="d-flex justify-content-between">
              <h5>#Entradas</h5>
              <div>
                <Icon name="ep:circle-plus" size="18px" color="black"></Icon>
              </div>
            </div>
            <div class="d-flex gap-2">
              <div class="d-flex align-items-center gap-2 fw-medium">
                <Icon name="ep:delete" size="12px" color="black"></Icon>
                <div>
                  key:
                </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                <input type="text" class="form-control input-camouflaged" value="value" />
                <Icon name="fa-solid:save" size="12px" color="black"></Icon>
              </div>
            </div>

            <div class="d-flex justify-content-between">
              <h5>#Salidas</h5>
              <div>
                <Icon name="ep:circle-plus" size="18px" color="black"></Icon>
              </div>
            </div>
            <!-- add item -->
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">Agregar nueva salida</h5>
                <!-- form, 4 inputs -->
                <input type="text" class="form-control mb-3" placeholder="Nombre" />
                <input type="text" class="form-control mb-3" placeholder="Tipo" />
                <input type="text" class="form-control mb-3" placeholder="Valor (opcional)" />
                <input type="text" class="form-control mb-3" placeholder="Vinculo" />
                <button class="btn btn-primary">Agregar</button>

              </div>
            </div>

            <div class="alert alert-info" role="alert">
              No hay nada que mostrar
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary">Close</button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">

.input-camouflaged {
  background-color: transparent;
  border-color: transparent;
  outline: none;
  box-shadow: none;
  &:hover {
    border-color: #f2f2f2;
  }
}

// transition search nuxt, vue
.search-enter-active, .search-leave-active {
  transition: opacity 0.5s;
}
.search-enter, .search-leave-to {
  opacity: 0;
}
</style>