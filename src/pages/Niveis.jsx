import React from "react";
import { useNavigate } from "react-router-dom";

export default function Niveis() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Escolha seu nível de aprendizado</h2>
      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => navigate("/primeiro-nivel")}
          style={{ margin: "10px", padding: "10px 20px" }}
        >
          🟢 Primeiro Nível
        </button>

        <button
          onClick={() => navigate("/segundo-nivel")}
          style={{ margin: "10px", padding: "10px 20px" }}
        >
          🟡 Segundo Nível
        </button>

        <button
          onClick={() => navigate("/terceiro-nivel")}
          style={{ margin: "10px", padding: "10px 20px" }}
        >
          🔵 Terceiro Nível
        </button>
      </div>
    </div>
  );
}
