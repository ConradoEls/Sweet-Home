import { products } from "../../../productsMock";
import ItemListPresentacional from "./ItemListPresentacional";
import { useLocalFetch } from "../../hooks/useLocalFetch";

const ItemListContainer = () => {

  const {items} = useLocalFetch([],products)
  
  return <ItemListPresentacional items={items} />;
};

export default ItemListContainer;
