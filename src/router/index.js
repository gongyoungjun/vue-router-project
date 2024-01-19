import {createRouter, createWebHistory} from 'vue-router';
import Board from '@/views/board/Board.vue';
import Signup from '@/views/SignUp.vue';
import TheHeader from '@/layouts/TheHeader.vue';

import {ref} from 'vue'

const routes = [
    {
        path: '/board',
        name: 'Board',
        component: Board,
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
    },
];

const router = createRouter({
    /*
    import.meta.env 객체를 통해 환경 변수에 접근
     */
    /*    history: createWebHistory(import.meta.env.BASE_URL),*/
    history: createWebHistory('/'),
    routes,
});

export default router;