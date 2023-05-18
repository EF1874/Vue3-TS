import { createRouter, createWebHashHistory } from 'vue-router';
import App from '../App.vue';

const routes = [{ path: '/', component: App }];
const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;
