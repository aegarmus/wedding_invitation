import { createRouter, createWebHistory } from 'vue-router';
import SaveTheDatePage from '../pages/SaveTheDatePage.vue';
import InvitationPage from '../pages/InvitationPage.vue';


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
    history: createWebHistory(),
    routes,
});

export default router;