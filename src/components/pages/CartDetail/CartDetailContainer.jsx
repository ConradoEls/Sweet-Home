import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CartDetail from "./CartDetail";
import Swal from "sweetalert2";


const CartDetailContainer = () => {
    const { cart, getTotalPrice, clearCart, removeById } = useContext(CartContext);
    let total = getTotalPrice();

    const limpiar = () => {
        Swal.fire({
          title: "Seguro quieres limpiar el carrito?",
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: "Si, limpiar",
          denyButtonText: `No, cancelar`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            clearCart();
            Swal.fire("Carrito limpio", "", "success");
          } else if (result.isDenied) {
            Swal.fire("El carrito queda como estaba", "", "info");
          }
        });
      };

  return (
    <CartDetail cart={cart} total={total} limpiar={limpiar} removeById={removeById}/>
  )
}

export default CartDetailContainer