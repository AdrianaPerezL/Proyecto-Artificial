import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../../App';
import Index from '../vistas/Index';
 
function Rutas() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Index/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Rutas