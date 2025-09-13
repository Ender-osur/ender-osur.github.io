<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { locale, messages } = useI18n();

import OneExperienceComponent from './OneExperienceComponent.vue';

const experience = computed<Experience>(() => {
  const currentLocale = locale.value;
  const exp = (messages.value[currentLocale] as { experience: Experience })?.experience || {};

  Object.values(exp).forEach((item: ExperienceDetail) => {
    if (item.description && typeof item.description === 'string') {
      item.description = item.description.split(';');
      console.log('item.description: ', item.description);
    }
  });
  return exp;
});

console.log('START: ', Object.values(experience));

interface Experience {
  title: string;
  exp1: ExperienceDetail;
  exp2: ExperienceDetail;
}

interface ExperienceDetail {
  title: string;
  company: string;
  period: string;
  description: string | string[];
  technologies: string[];
}
</script>

<template>
  <section
    id="experience"
    class="py-20 bg-transparent dark:bg-gray-900 transition-colors duration-300 flex justify-center items-center"
  >
    <div class="gap-8 flex flex-col items-center" data-aos="fade-up">
      <h2
        class="text-4xl font-bold text-center mb-12 tracking-[2px] text-gray-800 dark:text-gray-300 transition-colors"
      >
        {{ $t('experience.title') }}
      </h2>
      <div class="relative flex flex-col gap-4">
        <div
          class="absolute w-1.5 bg-[#5c3929] dark:bg-[#ff9966] h-full -left-12 transform -translate-x-4 rounded-full sm:block hidden"
        ></div>

        <OneExperienceComponent
          v-for="(exp, index) in Object.values(experience).slice(1)"
          :key="index"
          v-bind="exp"
          v-memo="[exp]"
        />
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped></style>
