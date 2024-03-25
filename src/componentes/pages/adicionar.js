import React, { useState } from 'react';
import Styles from './styles/adicionar.module.css';

function Adicionar() {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [tipo, setTipo] = useState('');
  const [subtipo, setSubtipo] = useState('');
  const [anime, setAnime] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoProduto = {
      nome: nome,
      quantidade: quantidade,
      tipo: tipo,
      subtipo: subtipo,
      anime: anime,
      valor: valor
    };
    console.log('Novo produto:', novoProduto);
    // Aqui você pode implementar a lógica para enviar os dados para o backend
  };

  return (
    <div className={Styles.container}>
      <h1>Adicionar Produto</h1>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <div className={Styles.formGroup}>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div className={Styles.formGroup}>
          <label>Quantidade:</label>
          <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} required />
        </div>
        <div className={Styles.formGroup}>
          <label>Tipo:</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
            <option value="">Selecione o tipo</option>
            <option value="Camiseta">Camiseta</option>
            <option value="Calça">Calça</option>
          </select>
        </div>
        <div className={Styles.formGroup}>
          <label>Subtipo:</label>
          <select value={subtipo} onChange={(e) => setSubtipo(e.target.value)} required>
            <option value="">Selecione o subtipo</option>
            {/* Opções de subtipo aqui */}
          </select>
        </div>
        <div className={Styles.formGroup}>
          <label>Anime:</label>
          <input type="text" value={anime} onChange={(e) => setAnime(e.target.value)} required />
        </div>
        <div className={Styles.formGroup}>
          <label>Valor:</label>
          <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} required />
        </div>
        <button type="submit" className={Styles.btnSubmit}>Adicionar Produto</button>
      </form>
    </div>
  );
}

export default Adicionar;
