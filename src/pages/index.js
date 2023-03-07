import AuthorForm from "./AuthorForm/authorform.js"
import { createBrowserRouter } from "react-router-dom";
import Hero from "./hero/hero";
import IndexLayout from "../layouts/IndexLayout/IndexLayout";
import MainLayout from '../layouts/MainLayout/MainLayout'
import Index from "./index/index";
import AuthForm from './AuthForm/AuthForm'
import ChaptherForm from "./ChapterForm/ChapterForm";

const router = createBrowserRouter([
    { 
        path: '/' , 
        element: <IndexLayout /> , 
        children: [
            { path: '/', element: <Index /> },
            { path: '/hero' , element: <Hero />},
            // { path: '/auth' , element: <AuthForm />}
        ]
    }, 
    
    { 
        path: '/' , 
        element: <MainLayout /> , 
        children: [
            { path: '/register' , element: <AuthForm state='register' /> },
            { path: '/signin' , element: <AuthForm state='login' /> },
            { path: '/chapther-form/:manga_id' , element: <ChaptherForm /> }

        ]
    },
    { 
        path: '/author-form' , 
        element: <AuthorForm/> 
    },

])

export default router