import { Button } from "@mui/material"
import { products } from "./productsMock"
import { addDoc, collection } from "firebase/firestore"
import { db } from "./firebaseConfig"


const PushProductsDB = () => {
    const cargar = () => {

        let itemsCollection = collection(db, "products")
        products.forEach((product)=>{
            addDoc(itemsCollection, product)
        })
    }
  return (
    <Button onClick={cargar}>Cargar Productos</Button>
  )
}

export default PushProductsDB