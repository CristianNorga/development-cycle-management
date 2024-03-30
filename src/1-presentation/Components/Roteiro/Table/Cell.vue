<script setup lang="ts">
import TaskRoteiro from '@models/TaskRoteiro.model'

defineProps({
  task: {
    type: Object as PropType<TaskRoteiro>,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})

const store = useTaskStore();
const storeUtils = useUtilsStore();

// SelectArea
const areasArray = ref([
  { id: 1, name: 'Cloud' },
  { id: 2, name: 'Devops' },
  { id: 3, name: 'OST' },
  { id: 4, name: 'DBA' },
  { id: 5, name: 'Developer' },
]);

let selectArea = ref('');

let taskPending = ref(false);

watch(selectArea, (newValue) => {
  console.log('selectArea-newvalue',newValue);
  taskPending.value = true;

  store.getTasksByArea('Cloud');
});

// Contenido
const openModal = ref(false);

const openContent = () => {
  openModal.value = true;
};

// Servicios
const servicesArray = ref([
  { id: 1, name: 'Service 1' },
  { id: 2, name: 'Service 2' },
  { id: 3, name: 'Service 3' },
  { id: 4, name: 'Service 4' },
  { id: 5, name: 'Service 5' },
]);

//estado
const statesArray = ref([
  { id: 1, name: 'Pendiente' },
  { id: 2, name: 'En Proceso' },
  { id: 3, name: 'Finalizado' },
]);

</script>

<template>
  <div class="row my-2 roteiro-table--cell">
    <div class="col position-relative p-0 d-flex align-items-center fw-medium fs-6 roteiro-table--cell-column">
      <div class="px-2 ms-4 d-flex justify-center align-items-center">
        {{index + 1}}
      </div>
    </div>
    <div class="col position-relative p-0 d-flex align-items-center fw-medium fs-6 roteiro-table--cell-column">
      <div class="w-100 h-100 d-flex justify-center align-items-center">
        <select class="w-100 h-100 border-0 bg-transparent form-select" v-model="selectArea">
          <option value="" hidden selected>{{ task.AreaSelected || 'Seleccionar' }}</option>
          <option v-for="area in areasArray" :key="area.id" :value="area.id">{{ area.name }}</option>
        </select>
      </div>
    </div>
    <div class="col position-relative p-0 d-flex align-items-center fw-medium fs-6 roteiro-table--cell-column">
      <div class="px-2 d-flex justify-center align-items-center">
        <select class="w-100 h-100 border-0 bg-transparent form-select">
          <option value="" hidden selected>{{ task.Name || 'Seleccionar' }}</option>
          <option v-for="task in store.tasks" :key="task.Id" :value="task.Name">{{ task.Name }}</option>
        </select>
      </div>
    </div>
    <div class="col position-relative p-0 d-flex align-items-center fw-medium fs-6 roteiro-table--cell-column">
      <div class="w-100 d-flex justify-content-center align-items-center roteiro-table__content" @click="storeUtils.openModal()">
        <span class="pe-2 d-flex align-items-center fw-medium roteiro-table__content-input">
          <Icon name="bi:arrow-up" size="12px" />
          {{task.Content.Inputs.length}}
        </span>
        <span class="d-flex align-items-center fw-medium roteiro-table__content-output">
          <Icon name="bi:arrow-down" size="12px" />
           {{task.Content.Outputs.length}}
        </span>
      </div>
    </div>
    <div class="col position-relative p-0 d-flex align-items-center fw-medium fs-6 roteiro-table--cell-column">
      <div class="px-2 d-flex justify-center align-items-center">
        <select class="w-100 h-100 border-0 bg-transparent form-select">
          <option value="" hidden selected>{{ task.Service || 'Seleccionar' }}</option>
          <option v-for="service in servicesArray" :key="service.id" :value="service.id">{{ service.name }}</option>
        </select>
      </div>
    </div>
    <div class="col position-relative p-0 d-flex align-items-center fw-medium fs-6 roteiro-table--cell-column">
      <div class="w-100 d-flex justify-content-center align-items-center">
        <div class="roteiro-table__dependencies">
          {{task.Dependencies.length}}
        </div>
      </div>
    </div>
    <div class="col position-relative p-0 d-flex align-items-center fw-medium fs-6 roteiro-table--cell-column">
      <div class="px-2 d-flex justify-center align-items-center">
        <select class="w-100 h-100 border-0 bg-transparent form-select">
          <option v-for="state in statesArray" :key="state.id" :value="state.id">{{ task.Status.Current || 'Seleccionar' }}</option>
          <option v-for="state in statesArray" :key="state.id" :value="state.id">{{ state.name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.roteiro-table {
  &--cell {
    z-index: 1;
    top: 10px;
    background-color: #f2f2f2;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: rgb(229 231 235 / 1);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1), 0 0 #0000;
    color: #000000;
  }
  &--cell-column {
    min-height: 45px;
    select {
      &:focus {
        box-shadow: none;
      }
      option {
        color: #000;
      }
    }
  }
  &__content {
    cursor: pointer;
    &-input {
      color: #5789ff;
      svg {
        fill: #5789ff;
      }
    }
    &-output {
      color: #ff3d3d;
      svg {
        fill: #ff3d3d;
      }
    }
  }
  &__dependencies {
    background-color: #f2f2f2;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: rgb(229 231 235 / 1);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1), 0 0 #0000;
    color: #000000;
    padding: 0.25rem 0.5rem;
  }
}
</style>