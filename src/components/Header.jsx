import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ background: "#4CAF50", color: "#fff", padding: "10px" }}>
      <h2>Plataforma de Alfabetização</h2>
      <nav>
        <Link to="/" style={{ color: "#fff", marginRight: "10px" }}>Início</Link>
        <Link to="/niveis" style={{ color: "#fff", marginRight: "10px" }}>Níveis</Link>
        <Link to="/educador" style={{ color: "#fff" }}>Educador</Link>
      </nav>
    </header>
  );
}
