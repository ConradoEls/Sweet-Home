import { useContext } from "react";
import "./CartWidget.css";
import { CartContext } from "../../../../context/CartContext";

const CartWidget = () => {

  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();
  return (
    <>
      <div className="navbar-shopping-cart">
        <img src="/assets/icon_shopping_cart.svg" alt="cart" />
        <div>{totalItems}</div>
      </div>
    </>
  );
};

export default CartWidget;
