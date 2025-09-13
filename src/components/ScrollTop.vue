<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const handleScroll = () => {
  isVisible.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div>
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="scroll-top-btn bg-gray-50 dark:bg-gray-800 text-[#5c3929] dark:text-[#ff9966] bottom-12 right-4 cursor-pointer fixed h-20 w-20 rounded-full text-4xl"
    >
      ⬆
    </button>
  </div>
</template>

<style scoped>
.scroll-top-btn {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
</style>
