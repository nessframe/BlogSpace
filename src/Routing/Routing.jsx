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
            path: '/',
            element: <Root />,
            errorElement: <Error />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: 'home',
                    element: <Home />
                },
                {
                    path: 'posts',
                    element: <Posts />
                },
                {
                    path: 'posts/:id',
                    element: <PostIdPage />
                },
                {
                    path: 'about',
                    element: <About />
                },
                {
                    path: 'login',
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