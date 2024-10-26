import { useEffect, useState } from "react";
import productList from "../assets/products.json";
import Product from "./product";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    productList.forEach((itm) => (itm.quantity = 1));
    setProducts(productList);
  }, []);

  return (
    <div className="product-wrap">
      <div>
        <ul className="product-list">
          {products?.map((product) => {
            const { id } = product;
            return (
              <Product
                key={id}
                {...product}
                list={[...products]}
                cart={cart}
                setCart={setCart}
              />
            );
          })}
        </ul>
      </div>
      <div>
        <h2>card</h2>
        {cart?.map((itm, i) => {
          return (
            <Product
              key={i}
              {...itm}
              list={[...products]}
              cart={cart}
              setCart={setCart}
              isCart
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
