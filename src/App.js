import logo from "./logo.svg";
import "./App.css";
import { React, useState } from "react";
import GerarPromocao from "./components/GerarPromocao";
import ProductList from "./components/ProductList";

function App() {
  const [product, setProduct] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);

  const [currentSale, setCurrentSale] = useState([]);

  console.log();

  return (
    <div className="App">
      <header className="App-header">
        {currentSale.map((carrinho, index) => (
          // const desco = props.price - (props.price * props.desc) / 100;
          <>
            {product[carrinho[0] - 1].name} preço{" "}
            {product[carrinho[0] - 1].price} desconto {carrinho[1]}{" "}
          </>
        ))}

        <div>carrinho de compras</div>

        <ProductList
          produtos={product}
          array={currentSale}
          setArray={setCurrentSale}
        />
        <GerarPromocao
          produtos={product}
          array={currentSale}
          setArray={setCurrentSale}
        />
      </header>
    </div>
  );
}

export default App;
