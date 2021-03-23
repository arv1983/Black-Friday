import { react, useState } from "react";

const Product = (props) => {
  const estilo = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    border: "solid black 1px",
  };

  const desco = props.price - (props.price * props.desc) / 100;

  return (
    <>
      <div style={estilo}>
        <div>Nome: {props.name} </div>
        Preço:
        {props.price}- Desconto {props.desc}% - Valor a pagar
        {desco}
        <button
          onClick={() =>
            props.setArray([...props.array, ...[[props.id, props.desc]]])
          }
        >
          Buy
        </button>
      </div>
    </>
  );
};

export default Product;

// .toLocaleString("pt-br", {
//   style: "currency",
//   currency: "BRL",
// })
