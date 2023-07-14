import { Link } from "react-router-dom";
import "./OrderDetail.css";

const OrderDetail = ({
  orderID,
  fechaFormateada,
  cart,
  total,
  totalQuantity,
  clearCart
}) => {
  return (
    <div className="detalle-completo">
      <div className="order-id">
        <h1>¡MUCHAS GRACIAS POR TU COMPRA!</h1>
        <h3>
          Tu número de pedido es: <span>#{orderID}</span>
        </h3>
      </div>
      <div className="my-order">
        <div className="my-order-container">
          <h2 className="detalle">Detalle de tu pedido:</h2>
          <div className="my-order-content">
            <div className="orden">
              <p>
                <span>{fechaFormateada}</span>
                <span>{totalQuantity} productos</span>
              </p>
              <p>${total}</p>
            </div>
            {cart.map((item) => {
              return (
                <div className="detalle-producto" key={item.id}>
                  <img src={item.img} alt="" className="img-prod" />
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                </div>
              );
            })}
          </div>
          <Link to={"/"}>
            <button className="back-home" onClick={clearCart}>Volver al inicio</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
