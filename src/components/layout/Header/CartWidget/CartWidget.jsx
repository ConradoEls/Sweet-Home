import { useContext } from "react";
import "./CartWidget.css";
import { CartContext } from "../../../../context/CartContext";

const CartWidget = () => {

  const { cart } = useContext(CartContext);

  console.log(cart);
  return (
    <>
      <div className="navbar-shopping-cart">
        <img src="/assets/icon_shopping_cart.svg" alt="cart" />
        <div>2</div>
      </div>
    </>
  );
};

export default CartWidget;
