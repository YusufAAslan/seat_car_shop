import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


createApp(App).use(router).mount('#app');




// const app = createApp(App)

// app.use(router)

// app.mount('#app')
