import { useEffect, useState } from "react";
import ProductDetailPresentacional from "./ProductDetailPresentacional";
import { products } from "../../../productsMock";

const ProductDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  let id = 2;

  useEffect(() => {
    let productFind = products.find((product) => product.id === id);

    const getProduct = new Promise((resolve) => {
      resolve(productFind);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  return <ProductDetailPresentacional productSelected={productSelected} />;
};

export default ProductDetailContainer;
