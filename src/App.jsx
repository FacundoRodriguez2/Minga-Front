import './App.css';
import { router } from './pages/index'
import { RouterProvider } from 'react-router-dom';
import MangaForm from './pages/Mangaform/MangaForm';




function App() {
  return (
    <div className="App">
      {/* <IndexLayout>
        <Index />
      </IndexLayout> */}
     <RouterProvider router={router} /> 
      {/* <MangaForm/> */}
    </div>
  );
}


export default App
