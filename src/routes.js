import List from './components/List';
import Detail from './components/Detail';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: List,
        meta: {
            list: 'pagesList'
        }
    },
    {
        name: 'Regions',
        path: '/regions',
        component: List,
        meta: {
            list: 'regionsList',
            child: 'Region.detail'
        }
    },
    {
        name: 'Characters',
        path: '/characters',
        component: List,
        meta: {
            list: 'charactersList',
            child: 'Character.detail'
        }
    },
    
    // TODO: Nest these routes
    {
        name: 'Region.detail',
        path: '/region/:id',
        component: Detail,
        props: true
    },
    {
        name: 'Character.detail',
        path: '/character/:id',
        component: Detail,
        props: true
    }
];

export default routes;
