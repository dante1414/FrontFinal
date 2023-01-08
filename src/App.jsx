import React from "react";
import { Route, Routes } from "react-router-dom";
import FormularioTareas from "./Paginas/FormularioTareas";
import PaginaNoEncontrada from "./Paginas/PaginaNoEncontrada";
import PaginaTareas from "./Paginas/PaginaTareas";
import Navbar from "./Components/Navbar";
import { TareaContexProvider } from "./context/TareaProvider";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto py-4 px-20">
        <TareaContexProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<PaginaTareas />} />
            <Route path="/nuevo" element={<FormularioTareas />} />
            <Route path="/editar/:_id" element={<FormularioTareas />} />
            <Route path="*" element={<PaginaNoEncontrada />} />
          </Routes>
        </TareaContexProvider>
      </div>
    </div>
  );
}

export default App;
