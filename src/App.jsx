import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Niveis from "./pages/Niveis";
import PrimeiroNivel from "./pages/PrimeiroNivel";
import SegundoNivel from "./pages/SegundoNivel";
import TerceiroNivel from "./pages/TerceiroNivel";
import Educador from "./pages/Educador";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/niveis" element={<Niveis />} />
        <Route path="/primeiro-nivel" element={<PrimeiroNivel />} />
        <Route path="/segundo-nivel" element={<SegundoNivel />} />
        <Route path="/terceiro-nivel" element={<TerceiroNivel />} />
        <Route path="/educador" element={<Educador />} />
      </Routes>
    </div>
  );
}

export default App;
