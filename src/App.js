import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import React from 'react';
import CrearCuenta from './nuevacuenta.js';
import Login from './login.js';
import Home from './home.js';
import RegistroVehiculo from './registrovehiculos.js';
import Acceso from './acceso.js';
import Barra from './components/Nav.js'


function App() {
  return (
    <div>
    <Router>
    <Barra/>
      <Routes>
        <Route path="/login" exact element={<Login/>} />
        <Route path="/nuevacuenta" exact element={<CrearCuenta/>} />
        <Route path="/" exact element={<Home/>} />
        <Route path="/registrovehiculo" exact element={<RegistroVehiculo/>} />
        <Route path="/acceso" exact element={<Acceso/>} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
