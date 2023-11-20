import "./checkout-item.style.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ product }) => {
  const { name, price, imageUrl, quantity } = product;
  const {
    removeItemFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useContext(CartContext);

  const removeProduct = () => removeItemFromCart(product);
  const increaseProduct = () => increaseProductQuantity(product);
  const decreaseProduct = () => decreaseProductQuantity(product);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={decreaseProduct}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseProduct}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeProduct}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
