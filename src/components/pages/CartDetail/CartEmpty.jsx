import { Link } from "react-router-dom";
import "./CartEmpty.css";

const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <h2>El carrito esta vacio</h2>
      <Link to={"/"} className="back-shop"> 
      <button className="shop-button">
      COMPRAR
      </button>
      </Link>
      
      <img className="info-sweet"
        src="https://res.cloudinary.com/dtvlycezq/image/upload/v1684852092/Sweet%20Home/Dorso_1_rbhnd0.jpg"
        alt=""
      />
    </div>
  );
};

export default CartEmpty;
