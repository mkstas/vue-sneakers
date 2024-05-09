import { createApp } from 'vue';
import { pinia, router } from './providers';
import App from './App.vue';
import './style.css';

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app');
