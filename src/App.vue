<script setup>
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();
import Counter from '@/components/Counter.vue'
</script>

<template>
 <div class="container text-center">
  <h1 :class="store.count >= store.goal ? 'text-success' : 'text-danger'"> {{ store.goal }}</h1>
  <div class="text-center">
    <router-link to="/" class="me-4">Fatima's counter</router-link>
  <router-link to="/assa" class="">Assa's counter</router-link>
  </div>
 </div>
 
  <router-view />
</template>

<style scoped>

</style>
