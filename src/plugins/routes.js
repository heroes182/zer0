import World from '../components/World';
import List from '../components/List';
import Detail from '../components/Detail';

const routes = [
    {
        name: 'World',
        path: '/',
        component: World
    },
    {
        name: 'List',
        path: '/:id',
        component: List,
        props: true
    },
    {
        name: 'Detail',
        path: '/details/:id',
        component: Detail,
        props: true
    }

    // {
    //     name: 'Characters',
    //     path: '/characters',
    //     component: List,
    //     meta: {
    //         list: 'charactersList',
    //         child: 'Character.detail'
    //     }
    // },
    
    // // TODO: Nest these routes
    // {
    //     name: 'Region.detail',
    //     path: '/region/:id',
    //     component: Detail,
    //     props: true
    // },
    // {
    //     name: 'Character.detail',
    //     path: '/character/:id',
    //     component: Detail,
    //     props: true
    // }
];

export default routes;
