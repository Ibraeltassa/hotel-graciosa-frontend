import React, { useState } from 'react';

function CadastroQuartos() {
    // Criando os estatdos para controlar os campos
    const [numero, setNumero] = useState('');
    const [tipo, setTipo] = useState('');
    const [observacoes, setObservacoes] = useState('');

    // Função chamada ao enviar o formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Impede o reload da página

        const novoQuarto = {
            numero,
            tipo,
            observacoes
        };

        console.log('Quarto cadastrado: ', novoQuarto); //Simula a ação (sem integração com o back ainda)

        // Limpa os campos
        setNumero('');
        setTipo('');
        setObservacoes('');

    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Cadastro de Quartos</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Número do Quarto: </label><br />
                    <input 
                        type="text" 
                        placeholder="Ex: 101"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                </div>

                <div>
                    <label>Tipo:</label><br />
                    <input
                        type="text" 
                        placeholder="Ex: Solteiro, Casal, Suíte"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    />
                </div>

                <div>
                    <label>Observações:</label><br />
                    <textarea 
                        placeholder="Alguma observação relevante..." 
                        value={observacoes}
                        onChange={(e) => setObservacoes(e.target.value)}
                    />
                </div>

                <button type="submit" style={{ marginTop: '10px' }}>Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastroQuartos;