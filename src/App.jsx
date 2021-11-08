import React, { useState } from "react";
import Layout from "./Layout/Layout.jsx";
import Index from "./pages/Index";
import Contacto from "./pages/Contacto.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import IndexAdmin from "./pages/admin/Index.jsx";
import Usuarios from "./pages/admin/usuarios/Index.jsx";
import LayoutAdmin from "./Layout/LayoutAdmin.jsx";
import UsuarioGenerico from "./pages/admin/usuarios/UsuarioGenerico.jsx";
import { UserContext } from "./context/user.js";
import { DarkContext } from "./context/Dark.js";
import Configuracion from "./pages/Configuracion.jsx";

function App() {
  const [userData, setUserData] = useState({ nombre: "David", suma: 0 });
  const [dark, setDark] = useState(false);
  return (
    <div>
      <DarkContext.Provider value={{ dark, setDark }}>
        <UserContext.Provider value={{ userData, setUserData }}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route path='/' element={<Index />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/configuracion' element={<Configuracion />} />
              </Route>
              <Route path='/admin' element={<LayoutAdmin />}>
                <Route path='' element={<IndexAdmin />} />
                <Route path='usuarios' element={<Usuarios />} />
                <Route
                  path='usuarios/:nombreusuario'
                  element={<UsuarioGenerico />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </DarkContext.Provider>
    </div>
  );
}

export default App;
