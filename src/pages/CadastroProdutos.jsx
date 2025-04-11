import { useState } from "react";

function CadastroProdutos() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const novoProduto = {
        nome,
        preco,
        descricao
      };
  
      console.log('Produto cadastrado:', novoProduto);
  
      // Resetar o formulário
      setNome('');
      setPreco('');
      setDescricao('');
    };
  
    return (
      <div style={{ padding: '20px' }}>
        <h2>Cadastro de Produtos</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome do Produto:</label><br />
            <input
              type="text"
              placeholder="Ex: Água, Refrigerante"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <label>Preço (R$):</label><br />
            <input
              type="number"
              placeholder="Ex: 4.50"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              step="0.01"
              min="0"
            />
          </div>
          <div>
            <label>Descrição:</label><br />
            <textarea
              placeholder="Descrição do produto..."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
  
  export default CadastroProdutos;