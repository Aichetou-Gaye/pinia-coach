<script setup>
import { useCounterStore } from '@/stores';
const store = useCounterStore();

</script>

<template>
  <div class="container">
    <h1 class="text-center border-bottom pb-2">
      Welcome to my counter app
    </h1>
    <div class="counter-main border p-4">
      <div class="header">
        <h1 class="text-center">{{ `${store.count}` }}</h1>
      </div>
      <div class="body d-flex justify-content-between">
        <button class="btn btn-sm btn-danger" @click="store.decrease()">-</button>
        <button class="btn btn-sm btn-primary" @click="store.increase()">+</button>
      </div>
    </div>
  </div>  
</template>

<style scoped>
.counter-main{
  width: 400px;
  margin: auto;
}
.btn {
  width: 50px
}
</style>
