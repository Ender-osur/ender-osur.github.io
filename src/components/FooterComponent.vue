<script setup lang="ts"></script>

<template>
  <footer
    class="w-full bg-gray-100 dark:bg-gray-800 py-8 transition-colors duration-300 items-center flex justify-center"
  >
    <div class="container mx-auto px-4 text-center">
      <p class="text-gray-600 dark:text-gray-400">
        {{ new Date().getFullYear() }} | {{ $t('footer.rights') }}
      </p>
      <a href="https://github.com/Ender-osur/vue_portfolio" referrerpolicy="no-referrer" target="_blank"
        >my Github</a
      >
    </div>
  </footer>
</template>

<style scoped></style>
