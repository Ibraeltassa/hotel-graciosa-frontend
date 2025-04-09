import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard  from "./pages/Dashboard";
import CadastroQuartos from "./pages/CadastroQuartos";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/cadastro-quartos" element={<CadastroQuartos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;