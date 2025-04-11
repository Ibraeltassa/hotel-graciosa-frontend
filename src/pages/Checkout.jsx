import { useState } from 'react';

function Checkout() {
  const [numeroQuarto, setNumeroQuarto] = useState('');

  const handleCheckout = (e) => {
    e.preventDefault();

    console.log(`Gerando checkout para o quarto: ${numeroQuarto}`);

    // Aqui futuramente você fará uma requisição para buscar os consumos do quarto

    setNumeroQuarto('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Checkout de Hóspede</h2>
      <form onSubmit={handleCheckout}>
        <div>
          <label>Número do Quarto:</label><br />
          <input
            type="text"
            placeholder="Ex: 202"
            value={numeroQuarto}
            onChange={(e) => setNumeroQuarto(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>
          Gerar Checkout
        </button>
      </form>
    </div>
  );
}

export default Checkout;
