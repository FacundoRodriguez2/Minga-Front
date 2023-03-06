import './App.css';
import router from './pages/index'
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <IndexLayout>
        <Index />
      </IndexLayout> */}
      <RouterProvider router={router} />
    </div>
  );
}


export default App;
