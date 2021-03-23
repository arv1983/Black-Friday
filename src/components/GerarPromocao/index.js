import { useEffect, useState } from "react";
import ProductList from "../ProductList";
import Product from "../Product";

const GerarPromocao = (props) => {
  const [promo, setPromo] = useState({});
  const [desconto, setDesconto] = useState();

  function gerarPromo() {
    const sorteio = Math.floor(Math.random() * 6) + 1;
    setDesconto(Math.floor(Math.random() * 50) + 40);

    const produtoSorteado = props.produtos.filter((promo) => {
      return promo.id === sorteio;
    });
    setPromo(produtoSorteado[0]);
  }

  return (
    <>
      <button onClick={gerarPromo}>Gerar Promoção</button>

      <Product
        id={promo.id}
        name={promo.name}
        price={promo.price}
        desc={desconto}
        array={props.array}
        setArray={props.setArray}
      />
    </>
  );
};
export default GerarPromocao;
