import React, { useState, useEffect } from "react";
import Button from "../components/Button";

const Index = () => {
  const [valor1, setvalor1] = useState(0);
  const [valor2, setvalor2] = useState(0);
  const [suma, setSuma] = useState(0);

  useEffect(() => {
    console.log("este es un useeffect se ejecuta una sola vez ");
  }, []);

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
    <div>
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
      <Button />
    </div>
  );
};

export default Index;
