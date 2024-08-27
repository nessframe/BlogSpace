import React, {useContext} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Posts from "./routes/Posts";
import About from "./routes/About";
import PostIdPage from "./routes/PostIdPage";
import Login from "./routes/Login";
import {AuthContext} from "../context/context";
import Authorized from "./routes/Authorized";

const Routing = () => {

    const {isAuth} = useContext(AuthContext)

    const router = createBrowserRouter([
        {
            path: 'BlogSpace/',
            element: <Root />,
            errorElement: <Error />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: '/BlogSpace/home',
                    element: <Home />
                },
                {
                    path: '/BlogSpace/posts',
                    element: <Posts />
                },
                {
                    path: '/BlogSpace/posts/:id',
                    element: <PostIdPage />
                },
                {
                    path: '/BlogSpace/about',
                    element: <About />
                },
                {
                    path: '/BlogSpace/login',
                    element: isAuth === false ? <Login /> : <Authorized />
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router} />
    );
};

export default Routing;