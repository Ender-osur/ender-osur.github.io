<script setup lang="ts">
defineProps<{
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}>();


</script>

<template>
  <div class="relative">
    <div class="absolute w-3 h-3 bg-[#5c3929] dark:bg-[#ff9966] rounded-full -left-9 sm:block hidden"></div>
    <article class=" relative bg-[#f9fafb] dark:bg-[#1b2635] shadow-xl max-w-200 rounded-ss-0 rounded-se-lg rounded-b-lg">

      <header class="rounded-t-lg p-6 w-full overflow-hidden">
        <div class="bg-white dark:bg-gray-900/50 p-6 w-full">
          <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {{ title }}
          </h3>
          <h4 class="text-lg mb-2 text-gray-700 dark:text-gray-400">{{ company }}</h4>
          <time class="block text-gray-700 dark:text-gray-400 text-sm mb-4">{{ period }}</time>
        </div>
      </header>
      <section class="px-12 py-4 flex flex-col gap-4 items-start">
        <ul class="space-y-2 mb-4 list-disc">
          <li
            v-for="(item, index) in description"
            :key="index"
            class="text-[#4a5565] dark:text-[#99a1af]"
          >
            {{ item }}
          </li>
        </ul>
        <footer class="flex flex-wrap gap-2">
          <span
            v-for="tech in technologies"
            :key="tech"
            class="px-3 py-1 text-cyan-800 dark:text-cyan-300 rounded-full text-sm"
          >
            {{ tech }}
          </span>
        </footer>
      </section>
    </article>
  </div>
</template>
