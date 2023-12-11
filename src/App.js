import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Add from './Components/Re/Add.js';
import Show from './Components/Re/Show.js';
import Update from './Components/Re/Update.js';
import Delete from './Components/Re/Delete.js';

import Home from './Components/Re/Home.js';
import Login from './Components/Login.js';
import Logout from './Components/Logout.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
        <Routes>
       
          <Route path='/add' element={<Add/>}  ></Route>
          <Route path='/show' element={<Show/>}  ></Route>
          <Route path='/update/:studentId' element={<Update/>}  ></Route>
          <Route path='/delete/:studentId' element={<Delete/>}  ></Route>
          <Route path='/login' element={<Login/>}  ></Route>
          <Route path='/logout' element={<Logout/>}  ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
