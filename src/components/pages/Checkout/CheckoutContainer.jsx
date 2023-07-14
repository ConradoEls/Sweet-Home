import { useFormik } from "formik";
import Checkout from "./Checkout";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import OrderDetailContainer from "../OrderDetail/OrderDetailContainer";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  let total = getTotalPrice();
  const [orderID, setOrderID] = useState(null);
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
    },

    onSubmit: (data) => {
      let ordersCollection = collection(db, "orders");
      let order = {
        buyer: data,
        items: cart,
        total: total,
      };
      addDoc(ordersCollection, order).then((res) => setOrderID(res.id));

      cart.forEach((product) => {
        updateDoc(doc(db, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });

      clearCart();
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe contener 3 caracteres"),
      email: Yup.string()
        .email("No corresponde a un email válido")
        .required("Este campo es obligatorio"),
      telefono: Yup.string()
        .required("Este campo es obligatorio")
        .min(10, "El número no es válido"),
    }),
  });

  return (
    <div>
      {orderID ? (
        <OrderDetailContainer orderID={orderID}/>
      ) : (
        <Checkout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};

export default CheckoutContainer;
