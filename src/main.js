import { createApp } from 'vue'
import './assets/css/main.css'
import App from './App.vue'

import vTouchHover from './directives/v-touch-hover'

const app = createApp(App);

app.directive('touch-hover', vTouchHover);

app.mount('#app');
