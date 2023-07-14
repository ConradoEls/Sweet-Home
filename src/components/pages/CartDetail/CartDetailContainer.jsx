import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CartDetail from "./CartDetail";
import Swal from "sweetalert2";

const CartDetailContainer = () => {
  const { cart, getTotalPrice, clearCart, removeById } =
    useContext(CartContext);
  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "Deseas vaciar el carrito?",
      showDenyButton: false,
      customClass: {
        confirmButton: "swalBtnColor",
      },
      showCancelButton: true,
      focusCancel: true,
      confirmButtonText: "Vaciar",
      confirmButtonColor: "#FFCAAF",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Se ha vaciado el carrito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  return (
    <div>
      {cart.length > 0 ? (
        <CartDetail
          cart={cart}
          total={total}
          limpiar={limpiar}
          removeById={removeById}
        />
      ) : (
        <h1>FALTA EDITAR ESTO!</h1>
      )}
    </div>
  );
};

export default CartDetailContainer;
