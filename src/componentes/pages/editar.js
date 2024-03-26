import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import styles from './styles/editar.module.css';

function Editar() {
  const [produto, setProduto] = useState({
    nome: '',
    tipo: '',
    quantidade: 0,
    animeProduto: '',
    precoUnidade: 0
  });

  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(`http://localhost:8080/produtos/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao obter produto');
        }
        const data = await response.json();
        setProduto(data);
      } catch (error) {
        console.error('Erro ao obter produto:', error);
      }
    };

    fetchProduto();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({
      ...produto,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/produtos/atualizar-${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar produto');
      }
      console.log('Produto atualizado com sucesso');
      setRedirect(true);
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  // Opções de tipo fixas
  const opcoesTipo = ['roupas', 'acessorios', 'Action-Figure'];

  return (
    <div className={styles.container}>
      <h1>Editar Produto</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Nome:</label>
          <input type="text" name="nome" value={produto.nome} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label>Tipo:</label>
          <select name="tipo" value={produto.tipo} onChange={handleChange}>
            {opcoesTipo.map((opcao) => (
              <option key={opcao} value={opcao}>{opcao}</option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Quantidade:</label>
          <input type="number" name="quantidade" value={produto.quantidade} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label>Anime:</label>
          <input type="text" name="animeProduto" value={produto.animeProduto} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label>Valor da Unidade:</label>
          <input type="number" name="precoUnidade" value={produto.precoUnidade} onChange={handleChange} />
        </div>
        <button className={styles.btnSalvar} type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Editar;
