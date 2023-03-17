import { createBrowserRouter } from "react-router-dom";
import Hero from "./hero/hero";
import IndexLayout from "../layouts/IndexLayout/IndexLayout";
import MainLayout from '../layouts/MainLayout/MainLayout'
import Index from "./index/index";
import AuthForm from './AuthForm/AuthForm'
import MangaForm from "./Mangaform/MangaForm";
import ChaptherForm from "./ChapterForm/ChapterForm";
import FormAuthor from "./AuthorForm/AuthorForm";
import FormCompany from "./CompanyForm/companyForm";
import Chapters from "./Chapters/Chapters";
import Manga from './Manga/Manga';
import Author from "./Author/author";
import Mangas from './Mangas/Mangas'

const router = createBrowserRouter([
    { 
        path: '/' , 
        element: <IndexLayout /> , 
        children: [
            { path: '/', element: <Index /> },
            { path: '/hero' , element: <Hero />},
            { path: '/auth' , element: <AuthForm />},
            
        ]
    }, 
    
    { 
        path: '/' , 
        element: <MainLayout /> , 
        children: [
            { path: '/author-form', element: <FormAuthor/> },
            { path: '/company-form' , element: <FormCompany/> },
            { path: '/author/:id', element: <Author/> },
            { path: '/register' , element: <AuthForm state='register'/> },
            { path: '/manga-form' , element: <MangaForm /> },
            { path: '/signin' , element: <AuthForm state='login'/> },
            { path: '/chapter-form/:manga_id' , element: <ChaptherForm /> },
            { path: '/manga/:id/:page' , element: <Manga/> },
            { path: '/mangas/:page' , element: <Mangas /> },
            { path: '/chapters/:id/:page' , element: <Chapters/> },

        ]
    }

])

export default router