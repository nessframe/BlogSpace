import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Posts from "./routes/Posts";
import About from "./routes/About";
import PostIdPage from "./routes/PostIdPage";

const Routing = () => {

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
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router} />
    );
};

export default Routing;