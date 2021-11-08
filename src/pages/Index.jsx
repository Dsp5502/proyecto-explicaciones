import React, { useState, useEffect } from "react";
import { useUser } from "../context/user";
import { Link } from "react-router-dom";
import { useDark } from "../context/Dark";

const Index = () => {
  const { userData, setUserData } = useUser();
  const { dark } = useDark();
  const [valor1, setvalor1] = useState(0);
  const [valor2, setvalor2] = useState(0);
  const [suma, setSuma] = useState(0);

  useEffect(() => {
    console.log("este es un useeffect se ejecuta una sola vez ");
    console.log("info del usuario", userData);
  }, [userData]);

  useEffect(() => {
    console.log(
      "cambio  alguno de sus valores y ya son ",
      "valor1:  ",
      valor1,
      " valor2: ",
      valor2
    );
    setSuma(valor1 + valor2);
  }, [valor1, valor2]);

  return (
    <div className={` container ${dark ? "fondo-Oscuro" : "fondo-Claro"}`}>
      <input
        value={valor1}
        onChange={(e) => setvalor1(parseInt(e.target.value))}
        placeholder='Valor 1'
        type='number'
      />
      <input
        value={valor2}
        onChange={(e) => setvalor2(parseInt(e.target.value))}
        placeholder='Valor 2'
        type='number'
      />
      <span>La suma de los valores 1 y 2 es: {suma} </span>
      <button onClick={() => setUserData({ ...userData, suma: suma })}>
        Guardar Suma
      </button>
      <Link to='/admin/usuarios/david'>ir a la pagina del usuario</Link>
      <Link to='/configuracion'>ir a la pagina de config</Link>
    </div>
  );
};

export default Index;
