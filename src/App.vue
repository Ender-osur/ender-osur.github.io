<script setup lang="ts">
// Importar el router view explícitamente para mejor claridad
import { RouterView } from 'vue-router';
import LayoutComponent from './components/layout/LayoutComponent.vue';
</script>

<template>
  <LayoutComponent>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </LayoutComponent>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
