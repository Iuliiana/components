import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { StoreFunc } from './pages/Storefuncpage';
import { StoreClass } from './pages/Storeclasspage';


function App() {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="/">home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/store-class">store-class</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/store-func">store-func</a>
        </li>
      </ul>
      <Routes>
        <Route path='*' element={<Homepage />} />
        <Route path='/store-func' element={<StoreFunc />} />
        <Route path='/store-class' element={<StoreClass />} />
      </Routes>
    </>
  );
}

export default App;
