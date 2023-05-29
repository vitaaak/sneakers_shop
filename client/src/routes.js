import {CART_ROUTE, SNEAKERS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, HOMEPAGE_ROUTE, PAYMENT_ROUTE} from "./utils/consts";
import Cart from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import Registration from "./Pages/RegistrationPage";
import Payment from "./Pages/PaymentPage";

//import Auth from "./Pages/Auth";
//import DevicePage from "./Pages/HomePage";

/*
export const authRoutes = [

тут нужны пэйджи с личным кабинетом и оплатой

]
*/

export const publicRoutes = [
    {
        path: CART_ROUTE,
        Component: Cart
    },
/*    {
        path: LOGIN_ROUTE,
        Component: Login
    },*/
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: HOMEPAGE_ROUTE + '/:id',
        Component: HomePage
    },
    {
        path: PAYMENT_ROUTE + '/:id',
        Component: Payment
    },
]