<template>
  <section
    id="about"
    class="py-20 bg-transparent dark:bg-gray-900 transition-colors duration-300 flex justify-center items-center"
  >
    <div class="container mx-auto px-4 gap-8 flex flex-col items-center" data-aos="fade-up">
      <h2
        class="text-4xl font-bold text-center mb-12 tracking-[2px] text-gray-800 dark:text-gray-300 transition-colors"
      >
        {{ $t('about.title') }}
      </h2>
      <div class="max-w-3xl mx-auto">
        <p class="text-lg text-gray-700 dark:text-gray-400 mb-6">
          {{ $t('about.description1') }}
        </p>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          {{ $t('about.description2') }}
        </p>
      </div>
    </div>
  </section>
</template>
