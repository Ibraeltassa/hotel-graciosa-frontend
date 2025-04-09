import React from 'react';

function CadastroQuartos() {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Cadastro de Quartos</h2>
            <form>
                <div>
                    <label>Número do Quarto: </label><br />
                    <input type="text" placeholder="Ex: 101" />
                </div>
                <div>
                    <label>Tipo:</label><br />
                    <input type="text" placeholder="Ex: Solteiro, Casal, Suíte" />
                </div>
                <div>
                    <label>Observações:</label><br />
                    <textarea placeholder="Alguma observação relevante..." />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastroQuartos;