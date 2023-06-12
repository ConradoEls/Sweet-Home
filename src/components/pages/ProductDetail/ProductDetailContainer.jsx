
import ProductDetailPresentacional from "./ProductDetailPresentacional";
import { products } from "../../../productsMock";
import useFetchID from "../../hooks/useFetchID";

const ProductDetailContainer = () => {
  
  const {productSelected} = useFetchID({},6,products)

  return <ProductDetailPresentacional productSelected={productSelected} />;
};

export default ProductDetailContainer;
