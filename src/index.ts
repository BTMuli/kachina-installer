import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

createApp(App).mount('#root');

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});