import { createRouter, createWebHistory } from 'vue-router';
import Models from './components/Models.vue';
import Colors from './components/Colors.vue';
import Accessories from './components/Accessories.vue';
import Summary from './components/Summary.vue';

const routes = [
    { path: '/', name: 'Models', component: Models },
    { path: '/colors', name: 'Colors', component: Colors },
    { path: '/accessories', name: 'Accessories', component: Accessories },
    { path: '/summary', name: 'Summary', component: Summary }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
