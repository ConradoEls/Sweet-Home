import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const useFetchFirestore = (initial) => {
  const [items, setItems] = useState(initial);
  const { categoryName } = useParams();

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let consulta;

    if (categoryName) {
      consulta = query(itemCollection, where("category", "==", categoryName));
    } else {
      consulta = itemCollection;
    }
    
    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return { items };
};
