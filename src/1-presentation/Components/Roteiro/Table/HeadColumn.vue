<script setup lang="ts">

defineProps<{
  area?: string
}>()

// InputSearch
const isActive = ref(false);

const activeInputSearch = (event: any) => {
  event.target.querySelector('input').focus();
  isActive.value = true;
};

const desactiveInputSearch = () => {
  isActive.value = false;
};


</script>

<template>
  <div class="col position-relative p-0 d-flex align-items-center fw-bold fs-4 roteiro-table--head-column" @mouseleave="desactiveInputSearch">
    <div class="position-absolute top-0 px-1 w-100 d-flex justify-content-center roteiro-table--head-search" @click="activeInputSearch">
      <Icon name="ep:search" color="black" size="16px" />
      <input :active="isActive" type="text" class="form-control roteiro-table__input-search" placeholder="Buscar" />
    </div>
    <div class="px-2 d-flex justify-center align-items-center">
      <div class="roteiro-table__orderby">
        <Icon name="ep:arrow-up-bold" color="gray" size="12px" />
        <Icon name="ep:arrow-down-bold" color="black" size="12px" />
      </div>
      {{area}}
    </div>
  </div>
</template>

<style scoped lang="scss">
.roteiro-table {
  &__input-search {
    transition: width 0.3s ease-in-out;
    width: 0px;
    padding: 0px;
    overflow: hidden;
    border: 0;
    outline: 0;
    background-color: transparent;
    font-size: 0.875rem;
    &::placeholder {
      color: #6b7280;
    }
    &:focus {
      box-shadow: none;
    }
    &[active="true"] {
      width: 100%;
      padding: 0.5rem;
    }
  }
  &--head-search {
    transition: height 0.3s 0.3s ease-in-out, border 0.3s 0.3s ease-in-out;
    overflow: hidden;
    height: 0px;
    border: 0px solid #d1d5db00;
    background-color: #f9fafb;
    border-radius: 0.5rem 0 0 0;
  }
  &--head-column {
    border-right: 1px solid #d1d5db00;
    border-left: 1px solid #d1d5db00;
    min-height: 65px;
    cursor: pointer;
    transition: border 0.3s ease-in-out;
    &:hover {
      border-right: 1px solid #d1d5dbcd;
      border-left: 1px solid #d1d5dbcd;
      .roteiro-table--head-search {
        height: 17px;
        border-bottom: 1px solid #d1d5db89;
      }
    }
    &:first-child {
      border-left: 0;
    }
    &:last-child {
      border-right: 0;
    }
  }
  &__orderby {
    display: flex;
    flex-direction: column;
    margin-right: 0.5rem;
  }
}
</style>