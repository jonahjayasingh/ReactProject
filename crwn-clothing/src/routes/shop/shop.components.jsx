import "./shop.styles.scss";
import ProductCard from "../../Components/product-card/product-card.component";

import { ProductsContext } from "../../contexts/product.context";

import { useContext } from "react";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
