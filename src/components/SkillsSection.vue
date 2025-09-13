<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t: $t } = useI18n();

const skills = ref([
  { name: 'JavaScript', icon: 'js.svg' },
  { name: 'TypeScript', icon: 'ts.svg' },
  { name: 'Vue.js', icon: 'vue.svg' },
  { name: 'Node.js', icon: 'node.svg' },
  { name: 'Python', icon: 'python.svg' },
  { name: 'HTML5', icon: 'html5.svg' },
  { name: 'Git', icon: 'git.svg' },
  { name: 'CSS3', icon: 'css3.svg' },
  { name: 'AWS', icon: 'aws.svg' },
  { name: 'React', icon: 'react.svg' },
  { name: 'React Native', icon: 'react.svg' },
  { name: 'Next', icon: 'next.svg' },
  { name: 'Angular', icon: 'angular.svg' },
]);

const softSkillsArray = computed(() => {
  const softSkills = $t('skills.softSkills')
    .split(';')
    .map((skill) => skill.trim());
  const headerAndBody = softSkills.map((item) => {
    const [header, body] = item.split(':');
    return { header, body}
  });
  return headerAndBody;
});
</script>

<template>
  <section
    id="skills"
    class="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 flex justify-center items-center w-full"
  >
    <main class="container mx-auto px-4 flex flex-col gap-8 w-full" data-aos="fade-up">
      <h2
        class="text-4xl font-bold text-center mb-12 tracking-[2px] text-gray-800 dark:text-gray-300 transition-colors"
      >
        {{ $t('skills.title') }}
      </h2>
      <div class="grid grid-col-1 sm:grid-cols-2 justify-center place-items-center gap-4">
        <article class="flex flex-col w-full h-full items-center">
          <div class="flex flex-col justify-center items-center gap-8">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-300">
              {{ $t('skills.soft') }}
            </h3>
            <ul class="text-gray-700 dark:text-gray-300 gap-4 flex flex-col items-center">
              <li v-for="(softSkill, index) in softSkillsArray" :key="index" class="text-wrap">
                <span class="text-[#5c3929] dark:text-[#ff9966]">{{ softSkill.header }}</span>:
                <span class="text-gray-700 dark:text-gray-300">{{ softSkill.body }}</span>
              </li>
            </ul>
          </div>
        </article>

        <article class="flex flex-col w-full h-full items-center gap-8">
          <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-300">
            {{ $t('skills.hard') }}
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div
              v-for="skill in skills"
              :key="skill.name"
              class="w-32 h-32 dark:bg-gray-900 bg-white flex flex-col justify-center items-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 select-none"
              data-aos="zoom-in"
            >
              <img :src="skill.icon" :alt="skill.name" class="w-12 h-12 mb-2" />
              <h3
                class="text-[.8rem] sm:text-[1rem] font-semibold text-gray-700 dark:text-gray-300"
              >
                {{ skill.name }}
              </h3>
            </div>
          </div>
        </article>
      </div>
    </main>
  </section>
</template>
