import ProductDetailPresentacional from "./ProductDetailPresentacional";
import { products } from "../../../productsMock";
import useFetchID from "../../hooks/useFetchID";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from 'sweetalert2'


const ProductDetailContainer = () => {

  const { addToCart } = useContext(CartContext);

  const { productSelected, cant } = useFetchID({}, products);
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    addToCart(data)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se agregó al carrito: x'+data.quantity+' '+data.title,
      showConfirmButton: false,
      timer: 2000
    })
  };

  return (
    <ProductDetailPresentacional
      cant={cant}
      productSelected={productSelected}
      onAdd={onAdd}
    />
  );
};

export default ProductDetailContainer;
