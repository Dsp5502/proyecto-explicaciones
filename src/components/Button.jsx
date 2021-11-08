import React from "react";

const Button = ({ texto = " culaquier cosa", color = "coral " }) => {
  return (
    <button style={{ backgroundColor: color }} className='button'>
      {texto}
    </button>
  );
};

export default Button;
