import { createRouter, createWebHistory } from 'vue-router';
import SaveTheDatePage from '../pages/SaveTheDatePage.vue';
import InvitationPage from '../pages/InvitationPage.vue';
import config from '../config';

const routes = [
    {
        path: '/',
        name: 'SaveTheDate',
        component: SaveTheDatePage,
    },
    {
        path: '/invitation',
        name: 'Invitation',
        component: InvitationPage,
    }
]

const router = createRouter({
    history: createWebHistory(config.baseUrl),
    routes,
});

export default router;