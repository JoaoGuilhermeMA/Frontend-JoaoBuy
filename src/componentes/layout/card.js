import React from 'react';
import styles from './styles/card.module.css'; // Importando estilos do arquivo card.module.css

function Card({ produto }) {
  return (
    <div className={styles.Card}> {/* Aplicando classe de estilo do arquivo CSS */}
      <img src="" alt="dasaddas" />
      <h2>{produto.nome}</h2>
      <p><strong>Quantidade:</strong> {produto.quantidade}</p>
      <p><strong>Tipo:</strong> {produto.tipo}</p>
      <p><strong>Subtipo:</strong> {produto.subtipo}</p>
      <p><strong>Anime:</strong> {produto.anime}</p>
      <p><strong>Valor da unidade:</strong> {produto.valor}</p>
    </div>
  );
}

export default Card;
