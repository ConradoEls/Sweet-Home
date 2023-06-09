import ProductDetailPresentacional from "./ProductDetailPresentacional"
import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";


const ProductDetailContainer = () => {
  return <ProductDetailPresentacional  />;
}

export default ProductDetailContainer