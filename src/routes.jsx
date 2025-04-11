import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard  from "./pages/Dashboard";
import CadastroQuartos from "./pages/CadastroQuartos";
import CadastroProdutos from "./pages/CadastroProdutos";
import Checkout from "./pages/Checkout";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/cadastro-quartos" element={<CadastroQuartos />} />
                <Route path="/cadastro-produtos" element={<CadastroProdutos />} />
                <Route path="/realizar-checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;