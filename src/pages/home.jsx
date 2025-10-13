import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bem-vindo à Plataforma de Alfabetização 👩‍🏫</h1>
      <p>Aprenda de forma simples, divertida e no seu ritmo.</p>
      <button onClick={() => navigate("/niveis")} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Começar Agora
      </button>
    </div>
  );
}
