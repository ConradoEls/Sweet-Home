import { useFormik } from "formik";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
    },

    onSubmit: (data) => {
      console.log(data);
    },
  });

  return <Checkout
  handleSubmit={handleSubmit}
  handleChange={handleChange}
/>
};

export default CheckoutContainer;
