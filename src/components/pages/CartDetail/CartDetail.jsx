import "./CartDetail.css";
import { Link, useNavigate } from "react-router-dom";

const CartDetail = ({ cart, total, limpiar, removeById }) => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  return (
    <div className="cart-detail">
      <div className="tittle-container">
        <div className="title-div">
          <img onClick={back} src="/assets/flechita.svg" alt="arrow" />
          <p className="tittle">Tu compra</p>
        </div>
        <p className="cleaner" onClick={limpiar}>
          Vaciar carrito
        </p>
      </div>
      <div className="my-order-content">
        {cart.map((item) => {
          return (
            <div className="shopping-cart" key={item.id}>
              <p>{item.quantity}x</p>
              <img src={item.img} alt="product" className="product-img" />
              <p>{item.title}</p>
              <p>${item.price}</p>
              <img
                onClick={() => removeById(item.id)}
                src="/assets/icon_close.png"
                alt="icon close"
              />
            </div>
          );
        })}

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$ {total}</p>
        </div>

        <div className="button-div">
          <Link to="/checkout">
            <button className="checkout-button">Finalizar Compra</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
