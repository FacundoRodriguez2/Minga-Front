import Hero from "./hero/hero";
import Register from "./register/register";
import IndexLayout from "../layouts/IndexLayout/IndexLayout";
import Index from "./index/index";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    { 
        path: '/' , 
        element: <IndexLayout /> , 
        children: [
            { path: '/index', element: <Index /> },
            { path: '/register' , element: <Register /> },
            { path: '/hero' , element: <Hero />}
        ]
    },
])