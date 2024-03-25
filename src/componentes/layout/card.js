import React from 'react';
import styles from './styles/card.module.css'; 
import imagem from '../../imagens/imagem.jpg'

function Card({ produto }) {
  return (
    <div className={styles.Card}>
      <h2>Nome: {produto.nome}</h2>
      <div className={styles.imageWrapper}>
        <img className={styles.imagem} src={imagem} alt="dasaddas" />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.typeWrapper}>
          <p><strong>Tipo:</strong> {produto.tipo}</p>
          <p><strong>Subtipo:</strong> {produto.subtipo}</p>
        </div>
        <div className={styles.detailsWrapper}>
          <p><strong>Quantidade:</strong> {produto.quantidade}</p>
          <p><strong>Anime:</strong> {produto.anime}</p>
        </div>
        <div className={styles.priceWrapper}>
          <p><strong>Valor da unidade:</strong> {produto.valor}</p>
        </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <button>Editar</button>
        <button>Excluir</button>
      </div>
    </div>
  );
}

export default Card;
