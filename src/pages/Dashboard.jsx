import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    return (
        <div style={{ padding: '20px' }}>
            <h2>Painel de Controle</h2>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <button onClick={() => navigate('/cadastro-quartos')}>Cadastro de Quartos</button>
                <button onClick={() => navigate('/cadastro-produtos')}>Cadastro de Produtos</button>
                <button onClick={() => navigate('/registrar-consumo')}>Registrar Consumo</button>
                <button onClick={() => navigate('/realizar-checkout')}>Realizar Checkout</button>
            </div>
        </div>
    );
}

export default Dashboard;