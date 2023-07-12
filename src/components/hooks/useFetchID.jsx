import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const useFetchID = (initial, list) => {
  const [productSelected, setProductSelected] = useState(initial);
  const { id } = useParams();
  const { getTotalQuantityByID } = useContext(CartContext);

  const cant = getTotalQuantityByID(id);


  useEffect(() => {
    let productFind = list.find((product) => product.id === +id);

    const getProduct = new Promise((resolve) => {
      resolve(productFind);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id,list]);

  return { productSelected, cant };
};

export default useFetchID;
