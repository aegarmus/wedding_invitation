import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/css/main.css'; // Asegúrate de importar tus estilos globales
import App from './App.vue';
import vTouchHover from './directives/v-touch-hover';
import scrollAnimation from './directives/scrollAnimation';
import router from './router';


const app = createApp(App);
const pinia = createPinia();

app.directive('touch-hover', vTouchHover);
app.directive('scroll-animation', scrollAnimation);
app.use(pinia)
app.use(router);


app.mount('#app');
