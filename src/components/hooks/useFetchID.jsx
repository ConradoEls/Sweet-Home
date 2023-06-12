import { useEffect, useState } from "react";

const useFetchID = (initial, id, list) => {
    const [productSelected, setProductSelected] = useState(initial);

  useEffect(() => {
    let productFind = list.find((product) => product.id === id);

    const getProduct = new Promise((resolve) => {
      resolve(productFind);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  },[id, list]);

  return {productSelected}
}

export default useFetchID