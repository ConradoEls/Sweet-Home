import { useState } from "react";
import { products } from "../../../productsMock";
import ItemListPresentacional from "./ItemListPresentacional";




const ItemListContainer = () => {
  const [items, setItems] = useState([]);


  return (
    <ItemListPresentacional items={items}/>
  );
};

export default ItemListContainer;
