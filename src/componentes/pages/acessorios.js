import React, { useState, useEffect } from 'react';
import styles from '../layout/styles/displayCard.module.css'; 
import Card from '../layout/card';
import axios from "axios";

function Acessorios() {
    const [produtos, setProdutos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get('http://localhost:8080/produtos/tipo-acessorios');
                setProdutos(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchProdutos();
    }, []);

    // Função para lidar com a exclusão de um produto
    const handleExcluirProduto = async (id) => {
        try {
            // Envia a solicitação DELETE para a API
            await axios.delete(`http://localhost:8080/produtos/excluir-${id}`);
            // Atualiza a lista de produtos após a exclusão
            setProdutos(produtos.filter(produto => produto.id !== id));
        } catch (error) {
            setError(error.message);
        }
    };

    if (error) {
        return <div>Erro ao obter produtos: {error}</div>;
    }

    return (
        <div className={styles.Display}>
            {/* Mapeia os produtos e renderiza um Card para cada um */}
            {produtos.map(produto => (
                <Card key={produto.id} produto={produto} onExcluir={handleExcluirProduto} />
            ))}
        </div>
    );
}

export default Acessorios;