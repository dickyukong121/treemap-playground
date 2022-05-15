import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/home.component';
function App() {

  return (
    <div >
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>

    </div>
  );
}

export default App;

