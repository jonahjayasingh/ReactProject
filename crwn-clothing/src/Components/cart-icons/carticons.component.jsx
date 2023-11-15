import "./carticons.styles.scss";
import { ReactComponent as ShoppingIcom } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
const CartIcons = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcom className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcons;
