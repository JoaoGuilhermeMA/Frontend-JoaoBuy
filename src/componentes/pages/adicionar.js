import React, { useState } from 'react';
import Styles from './styles/adicionar.module.css';

function Adicionar() {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [tipo, setTipo] = useState('');
  const [subtipo, setSubtipo] = useState('');
  const [anime, setAnime] = useState('');
  const [valor, setValor] = useState('');
  const [urlImagem, setUrlImagem] = useState('');

  const opcoesSubtipo = {
    roupas: ['Camiseta', 'Calça', 'Vestido'],
    acessorios: ['Colar', 'Pulseira', 'Anel'],
    'Action-Figure': ['Gundam', 'Dragon Ball', 'Naruto']
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const novoProduto = {
      nome: nome,
      quantidade: parseInt(quantidade), // Certifique-se de converter para número
      tipo: tipo,
      subtipo: subtipo,
      animeProduto: anime,
      precoUnidade: parseFloat(valor), // Certifique-se de converter para número decimal
      urlFoto: urlImagem  // Adicione a URL da imagem aqui
    };

    try {
      const response = await fetch('http://localhost:8080/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoProduto)
      });

      if (response.ok) {
        // Se o produto for adicionado com sucesso, você pode fazer alguma ação, como limpar o formulário ou exibir uma mensagem de sucesso
        console.log('Produto adicionado com sucesso!');
        // Limpar campos do formulário após o envio
        setNome('');
        setQuantidade('');
        setTipo('');
        setSubtipo('');
        setAnime('');
        setValor('');
        setUrlImagem('');
      } else {
        // Se houver algum erro ao adicionar o produto, você pode lidar com isso aqui
        console.error('Erro ao adicionar produto:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
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
          <select value={tipo} onChange={(e) => {
            setTipo(e.target.value);
            // Limpa o subtipo quando o tipo é alterado
            setSubtipo('');
          }} required>
            <option value="">Selecione o tipo</option>
            <option value="roupas">Roupas</option>
            <option value="acessorios">Acessórios</option>
            <option value="Action-Figure">Action Figure</option>
          </select>
        </div>
        <div className={Styles.formGroup}>
          <label>Subtipo:</label>
          <select value={subtipo} onChange={(e) => setSubtipo(e.target.value)} required>
            <option value="">Selecione o subtipo</option>
            {opcoesSubtipo[tipo] && opcoesSubtipo[tipo].map((opcao, index) => (
              <option key={index} value={opcao}>{opcao}</option>
            ))}
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
        <div className={Styles.formGroup}>
          <label>URL da Imagem:</label>
          <input type="text" value={urlImagem} onChange={(e) => setUrlImagem(e.target.value)} required />
        </div>
        <button type="submit" className={Styles.btnSubmit}>Adicionar Produto</button>
      </form>
    </div>
  );
}

export default Adicionar;
