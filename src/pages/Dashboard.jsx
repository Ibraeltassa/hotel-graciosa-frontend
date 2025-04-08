function Dashboard() {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Painel de Controle</h2>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <button>Cadastro de Quartos</button>
                <button>Cadastro de Produtos</button>
                <button>Registrar Consumo</button>
                <button>Realizar Checkout</button>
            </div>
        </div>
    );
}

export default Dashboard;