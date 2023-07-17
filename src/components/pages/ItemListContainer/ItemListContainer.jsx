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
            position: "absolute",
            left: 0,
            bottom: 0,
            right: 0,
            top: 0,
            margin: "auto"
          }}
          size={100}
        />
      )}
    </div>
  );
};

export default ItemListContainer;
