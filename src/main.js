import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '/src/assets/css/main.css';
import App from './App.vue';
import vTouchHover from './directives/v-touch-hover';
import router from './router';


const app = createApp(App);
const pinia = createPinia();

app.directive('touch-hover', vTouchHover);
app.use(pinia)
app.use(router);


app.mount('#app');
