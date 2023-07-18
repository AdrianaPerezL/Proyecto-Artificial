import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from '../components/vistas/Index';
import { Inicio } from '../components/vistas/Inicio';
import Tabla  from '../components/vistas/Tabla'
 
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/tabla' element={<Tabla/>}/>
        </Routes>
    </BrowserRouter>
  );
}