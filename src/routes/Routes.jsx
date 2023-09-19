import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

// En este componente se cargan los componentes de las rutas
// la ruta principal es /
// La ruta para las rutas que no existen es *

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default RoutesApp;
