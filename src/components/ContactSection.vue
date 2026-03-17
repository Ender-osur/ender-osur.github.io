<script setup lang="ts">
import { reactive, ref } from 'vue';
import emailjs from '@emailjs/browser';

const isSubmitted = ref(false);
const isLoading = ref(false);
const errorMessage = ref('');

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const handleSubmit = async () => {
  isLoading.value = true;
  errorMessage.value = '';

  try {
    await emailjs.send(
      'service_4695imd',
      'template_ckqxpoc',
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      'Ii90ixvKmujhcxHqR'
    );

    isSubmitted.value = true;
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    errorMessage.value = 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <section
    id="contact"
    class="py-20 bg-transparent dark:bg-transparent transition-colors duration-300 flex justify-center items-center"
  >
    <div class="container mx-auto px-4" data-aos="fade-up">
      <h2
        class="text-4xl font-bold text-center mb-12 font-[monospace] tracking-[2px] text-gray-800 dark:text-gray-300"
      >
        {{ $t('contact.title') }}
      </h2>
      <div v-if="!isSubmitted" class="w-full">
        <form
          @submit.prevent="handleSubmit"
          class="space-y-6 flex flex-col w-full items-center gap-2"
        >
          <div class="form-section">
            <label
              for="name"
              class="label-text block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors mb-1"
            >
              {{ $t('contact.name') }}
            </label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              :disabled="isLoading"
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white transition-colors dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              required
            />
          </div>
          <div class="form-section">
            <label
              for="email"
              class="label-text block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              {{ $t('contact.email') }}
            </label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              :disabled="isLoading"
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent dark:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              required
            />
          </div>
          <div class="form-section">
            <label
              for="message"
              class="label-text block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              {{ $t('contact.message') }}
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              :disabled="isLoading"
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent dark:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              required
            ></textarea>
          </div>

          <p v-if="errorMessage" class="text-red-600 dark:text-red-400 text-sm">
            {{ errorMessage }}
          </p>

          <button
            type="submit"
            :disabled="isLoading"
            class="cursor-pointer font-[monospace] px-4 py-2 rounded-lg bg-primary hover:text-gray-900 text-gray-600 dark:text-gray-400 font-medium hover:bg-primary-dark transition-colors border-2 border-gray-500 hover:border-gray-900 hover:dark:text-gray-50 hover:dark:border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isLoading ? 'Enviando...' : $t('contact.send') }}
          </button>
        </form>
      </div>
      <div v-else>
        <p class="text-xl text-gray-700 dark:text-gray-300">{{ $t('contact.thanks') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.form-section {
  display: flex;
  flex-direction: column;
  width: 90%;
}
.label-text {
  font-size: 1.2rem;
  padding-left: 1rem;
  font-family: monospace;
}
</style>
