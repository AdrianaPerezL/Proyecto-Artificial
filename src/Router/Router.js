import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../components/vistas/Index";
import { Inicio } from "../components/vistas/Inicio";
import Proyecto from "../components/vistas/Proyecto/Proyecto";
import { Expediente } from "../components/vistas/Expedientes/Expediente";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/expediente" element={<Expediente />} />
        <Route path="/proyectos" element={<Proyecto />} />
      </Routes>
    </BrowserRouter>
  );
}
