import { useContext } from "react";
import OrderDetail from "./OrderDetail";
import { CartContext } from "../../../context/CartContext";

const OrderDetailContainer = ({ orderID }) => {
  const fechaHoy = new Date();

  const dia = fechaHoy.getDate();
  const mes = fechaHoy.getMonth() + 1;
  const anio = fechaHoy.getFullYear();

  const fechaFormateada = dia + "/" + mes + "/" + anio;

  const { cart, getTotalItems, getTotalPrice, clearCart } = useContext(CartContext);

  let total = getTotalPrice();
  let totalQuantity = getTotalItems()


  return (
    <OrderDetail
      orderID={orderID}
      fechaFormateada={fechaFormateada}
      cart={cart}
      total={total}
      totalQuantity={totalQuantity}
      clearCart={clearCart}
    />
  );
};

export default OrderDetailContainer;
