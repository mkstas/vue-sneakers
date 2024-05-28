import { createApp } from 'vue';
import { pinia, router } from './providers';
import App from './App.vue';
import './style.css';

createApp(App).use(router).use(pinia).mount('#app');
