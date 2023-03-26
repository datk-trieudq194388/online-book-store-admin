import Login from "../pages/Auth/Login";
import Home from "../pages/Home/Home";
import Order from "../pages/Order/Order";


export const AppRoutes = [
    {
      key: "login",
      path: '/login',
      element: <Login/>,
      exact: false
    },
    {
      key: "home",
      path: '/',
      element: <Home/>,
      exact: true
    },
    {
      key: "order",
      path: '/order/:type',
      element: <Order/>,
      exact: true
    }
]