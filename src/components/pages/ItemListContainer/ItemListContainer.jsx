import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemListPresentacional from "./ItemListPresentacional";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProduct = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
        reject("No se encontraron productos")
      }, 1000);
    });

    fetchProduct
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log("catch: ", err);
      });
  }, []);

  return <ItemListPresentacional items={items} />;
};

export default ItemListContainer;
