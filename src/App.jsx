import './App.css';
import Index from './components/index';
import IndexLayout from './layouts/IndexLayout/IndexLayout';
import MainLayout from './layouts/MainLayout/MainLayout';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Index/>
      </MainLayout>
    </div>
  );
}

export default App;
