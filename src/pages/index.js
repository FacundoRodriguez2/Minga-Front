import AuthorForm from "./AuthorForm/authorform.js"
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    
    { 
        path: '/author-form' , 
        element: <AuthorForm/> 
    },

])