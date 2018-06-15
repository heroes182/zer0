import Menu from './views/Menu.vue';
import World from './views/World.vue';
import Character from './views/Character.vue';
import Characters from './views/Characters.vue';
import NotFound from './views/NotFound.vue';

const routes = [
    { path: '/', component: Menu },
    { path: '/world', component: World },
    { path: '/characters', component: Characters },
    { path: '/character/:id', component: Character },
    { path: '*', component: NotFound }
];

export default routes;
