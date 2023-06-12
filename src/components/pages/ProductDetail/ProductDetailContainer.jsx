import ProductDetailPresentacional from "./ProductDetailPresentacional";
import { products } from "../../../productsMock";
import useFetchID from "../../hooks/useFetchID";


const ProductDetailContainer = () => {
  const { productSelected } = useFetchID({}, products);
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    console.log(data);
  };

  return (
    <ProductDetailPresentacional
      productSelected={productSelected}
      onAdd={onAdd}
    />
  );
};

export default ProductDetailContainer;
