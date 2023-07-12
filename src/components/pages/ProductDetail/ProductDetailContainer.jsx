import ProductDetailPresentacional from "./ProductDetailPresentacional";
import { products } from "../../../productsMock";
import useFetchID from "../../hooks/useFetchID";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";


const ProductDetailContainer = () => {

  const { addToCart } = useContext(CartContext);




  const { productSelected, cant } = useFetchID({}, products);
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    addToCart(data)
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
