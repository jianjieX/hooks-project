import Home from '../pages/home';
import StoreView from '../pages/storeView';
import ClassView from '../pages/classView';
export const mainRoutes=[
    {
        pathname:'/',
        component:StoreView
    },
    {
        pathname:'/home',
        component:Home
    },
    {
        pathname:'/class',
        component:ClassView
    }
];
