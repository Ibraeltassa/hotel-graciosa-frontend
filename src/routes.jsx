import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard  from "./pages/Dashboard";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/dashboard" element={<Dashboard/>} />
                {/* Aqui colocaremos /quartos, /produtos, etc */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;