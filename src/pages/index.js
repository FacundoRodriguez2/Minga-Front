import Hero from "./hero/hero";
import IndexLayout from "../layouts/IndexLayout/IndexLayout";
import MainLayout from '../layouts/MainLayout/MainLayout'
import Index from "./index/index";
import AuthForm from './AuthForm/AuthForm'
import ChaptherForm from "./ChapterForm/ChapterForm";
import LogIn from "./LogIn/LogIn";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    { 
        path: '/' , 
        element: <IndexLayout /> , 
        children: [
            { path: '/', element: <Index /> },
            { path: '/hero' , element: <Hero />}
        ]
    }, 
    
    { 
        path: '/' , 
        element: <MainLayout /> , 
        children: [
            { path: '/register' , element: <AuthForm /> },
            { path: '/signin' , element: <LogIn /> },
            { path: '/chapther-form/:manga_id' , element: <ChaptherForm /> }

        ]
    }
])