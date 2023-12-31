import "./checkout.style.scss";
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem product={item} key={item.id} />
      ))}
      <div className="total">TOTAL: ${totalPrice}</div>
    </div>
  );
};

export default Checkout;
