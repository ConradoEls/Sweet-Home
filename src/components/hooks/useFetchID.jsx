import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";


const useFetchID = (initial) => {
  const [productSelected, setProductSelected] = useState(initial);
  const { id } = useParams();
  const { getTotalQuantityByID } = useContext(CartContext);

  const cant = getTotalQuantityByID(id);


  useEffect(() => {
    let itemCollection = collection(db, "products");
    let refDoc = doc(itemCollection, id)
    getDoc(refDoc).then((res)=>{
      setProductSelected({
        id: res.id,
        ...res.data()
      })
    })
  }, [id]);

  return { productSelected, cant };
};

export default useFetchID;
