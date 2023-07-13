import { products } from "../../../productsMock";
import ItemListPresentacional from "./ItemListPresentacional";
import { useLocalFetch } from "../../hooks/useLocalFetch";
import { BounceLoader } from "react-spinners";

const ItemListContainer = () => {
  const { items } = useLocalFetch([], products);
  return (
    <div>
      {items.length > 0 ? (
        <ItemListPresentacional items={items} />
      ) : (
        <BounceLoader
          color="#FFCAAF"
          cssOverride={{
            left: "47%",
            position: "fixed",
            top: "40%",
          }}
          size={100}
        />
      )}
    </div>
  );
};

export default ItemListContainer;
