import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-items/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems
          ? cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          : ""}
      </div>
      <Button onClick={goToCheckout}> Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
