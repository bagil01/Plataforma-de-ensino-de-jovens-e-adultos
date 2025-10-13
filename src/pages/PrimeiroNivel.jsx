import React from "react";
import somA from "../assets/audios/somA.mp3";
// Se tiver imagem da letra A, mantenha o import abaixo e o arquivo na pasta correta
import letraA from "../assets/images/letraA.png";

export default function PrimeiroNivel() {
  const tocarSom = () => {
    try {
      new Audio(somA).play();
    } catch (err) {
      console.warn("Erro ao tocar áudio:", err);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      tocarSom();
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Nível 1 — Sons e Letras</h2>
      <p style={{ marginBottom: "30px" }}>
        Toque ou pressione Enter/Barra de Espaço para ouvir o som da letra
      </p>

      <div
        className="letter-frame pulse"
        role="button"
        tabIndex={0}
        onClick={tocarSom}
        onKeyDown={handleKey}
        aria-label="Letra A, clique para ouvir o som"
      >
        {letraA ? (
          <img src={letraA} alt="Letra A" className="letter-img" />
        ) : (
          <div className="letter-fallback">A</div>
        )}
        <div className="letter-label">Letra A — som de “Aaaa”</div>
      </div>
    </div>
  );
}
