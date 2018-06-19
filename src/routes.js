import Menu from './components/Menu';
import World from './components/World';
import Region from './components/Region';
import Character from './components/Character';
import Characters from './components/Characters';
import Coi from './components/Coi';
import NotFound from './components/NotFound';

const routes = [
    { path: '/', component: Menu },
    { path: '/world', component: World },
    { path: '/region/:id', component: Region },
    { path: '/characters', component: Characters },
    { path: '/character/:id', component: Character },
    { path: '/coi', component: Coi },
    { path: '*', component: NotFound }
];

export default routes;
