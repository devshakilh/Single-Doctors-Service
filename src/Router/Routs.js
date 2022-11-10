import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddReview from "../Pages/AddReview";
import AddService from "../Pages/AddService";
import AddServiceCardDetails from "../Pages/AddServiceCardDetails";
import AllCard from "../Pages/AllCard";

import Home from "../Pages/Home";
import PrivateRoute from "../Pages/PrivateRoute";

import Review from "../Pages/Review";
import Service from "../Pages/Service";

import ServiceCardDetails from "../Pages/ServiceCardDetails";
import SignUp from "../Pages/Singup";

import Blog from "../Shared/Blog";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Login from "../Shared/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/service',
                element: <Service></Service>
            },

            {
                path: '/servicecarddetails/:id',
                element: <ServiceCardDetails></ServiceCardDetails>,
                loader: ({ params }) => fetch(`https://assignment-11-server-blush.vercel.app/services/${params.id}`)
            },
            {
                path: '/addservicecarddetails/:id',
                element: <AddServiceCardDetails></AddServiceCardDetails>,
                loader: ({ params }) => fetch(`https://assignment-11-server-blush.vercel.app/add/${params.id}`)
            },
            {
                path: '/allcard',
                element: <AllCard></AllCard>
            },

            {
                path: '/addreview',

                element: <AddReview></AddReview>

            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/singup',
                element: <SignUp></SignUp>
            }
        ]
    }
])
export default router;