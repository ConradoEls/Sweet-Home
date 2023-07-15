import ItemListPresentacional from "./ItemListPresentacional";
import { BounceLoader } from "react-spinners";
import { useFetchFirestore } from "../../hooks/useFetchFirestore";
// import PushProductsDB from "../../../PushProductsDB";

const ItemListContainer = () => {
  const { items } = useFetchFirestore([]);
  return (
    // <PushProductsDB />
    <div>
      {items.length > 0 ? (
        <ItemListPresentacional items={items} />
      ) : (
        <BounceLoader
          color="#FFCAAF"
          cssOverride={{
            left: "47.7%",
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
