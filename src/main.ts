import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { i18n } from './i18n';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);

// Manejar redirección desde 404.html
const savedRedirect = sessionStorage.getItem('redirect');
if (savedRedirect) {
  sessionStorage.removeItem('redirect');
  router.replace(savedRedirect);
}

app.mount('#app');
