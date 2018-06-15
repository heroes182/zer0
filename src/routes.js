import Menu from './components/Menu';
import World from './components/World';
import Character from './components/Character';
import Characters from './components/Characters';
import NotFound from './components/NotFound';

const routes = [
    { path: '/', component: Menu },
    { path: '/world', component: World },
    { path: '/characters', component: Characters },
    { path: '/character/:id', component: Character },
    { path: '*', component: NotFound }
];

export default routes;
