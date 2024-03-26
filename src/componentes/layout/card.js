import React from 'react';
import styles from './styles/card.module.css'; 
import imagem from '../../imagens/imagem.jpg'

function Card({ produto, onExcluir }) {
  // Função para lidar com o clique no botão Excluir
  const handleClickExcluir = () => {
    // Chama a função onExcluir passando o ID do produto como argumento
    onExcluir(produto.id);
  };

  return (
    <div className={styles.Card}>
      <h2>{produto.nome}</h2>
      <div className={styles.imageWrapper}>
        <img className={styles.imagem} src={imagem} alt="dasaddas" />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.typeWrapper}>
          <p><strong>Tipo:</strong> {produto.tipo}</p>
        </div>
        <div className={styles.detailsWrapper}>
          <p><strong>Quantidade:</strong> {produto.quantidade}</p>
          <p><strong>Anime:</strong> {produto.animeProduto}</p>
        </div>
        <div className={styles.priceWrapper}>
          <p><strong>Valor da unidade:</strong> {produto.precoUnidade}</p>
        </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <button>Editar</button>
        {/* Adiciona o evento de clique ao botão Excluir */}
        <button onClick={handleClickExcluir}>Excluir</button>
      </div>
    </div>
  );
}

export default Card;
