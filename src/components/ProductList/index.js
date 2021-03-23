import { react, useState } from "react";
import Product from "../Product";

const ProductList = (props) => {
  if (props.produtos) {
    return (
      <div>
        <h2>Produtos</h2>

        {props.produtos.map((product, index) => (
          <>
            <Product
              key={index}
              id={product.id}
              name={product.name}
              price={product.price}
              desc="0"
              array={props.array}
              setArray={props.setArray}
            />
          </>
        ))}
      </div>
    );
  } else {
    return (
      <>
        Sua promoção black friday
        <br />
      </>
    );
  }
};

export default ProductList;
