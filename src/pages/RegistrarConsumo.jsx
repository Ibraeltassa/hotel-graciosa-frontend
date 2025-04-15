import { useState } from 'react';

function RegistrarConsumo() {
  const [quartoId, setQuartoId] = useState('');
  const [produtoId, setProdutoId] = useState('');
  const [quantidade, setQuantidade] = useState(1);

  // Dados simulados (depois vamos puxar do backend)
  const quartos = [
    { id: 1, nome: 'Quarto 101' },
    { id: 2, nome: 'Quarto 102' },
  ];

  const produtos = [
    { id: 1, nome: 'Água Mineral' },
    { id: 2, nome: 'Coca-Cola' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const consumo = {
      quartoId,
      produtoId,
      quantidade
    };

    console.log('Consumo registrado:', consumo);

    // Limpar campos
    setQuartoId('');
    setProdutoId('');
    setQuantidade(1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Registrar Consumo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Quarto:</label><br />
          <select value={quartoId} onChange={(e) => setQuartoId(e.target.value)}>
            <option value="">Selecione um quarto</option>
            {quartos.map((q) => (
              <option key={q.id} value={q.id}>{q.nome}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Produto:</label><br />
          <select value={produtoId} onChange={(e) => setProdutoId(e.target.value)}>
            <option value="">Selecione um produto</option>
            {produtos.map((p) => (
              <option key={p.id} value={p.id}>{p.nome}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Quantidade:</label><br />
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            min="1"
          />
        </div>

        <button type="submit" style={{ marginTop: '10px' }}>
          Registrar Consumo
        </button>
      </form>
    </div>
  );
}

export default RegistrarConsumo;
