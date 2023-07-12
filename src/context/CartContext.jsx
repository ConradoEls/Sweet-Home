import { createContext, useState } from "react";

export const CartContext = createContext();



const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState( [] )

    const addToCart = ( newProduct ) => {
        let exist = isInCart(newProduct.id)
        if(exist){
            let newArray = cart.map(product => {
                if(product.id === newProduct.id){
                    return{
                        ...product,
                        quantity: newProduct.quantity
                    }
                }else{
                    return product
                }
            })
            setCart(newArray)
        }else{
            setCart( [...cart, newProduct ] )
        }
    }

    const isInCart= (id) => {
        let exist = cart.some((prod)=> prod.id === id);
        return exist
    }


    const getTotalQuantityByID = (id) => {
        let product = cart.find(prod=>prod.id === +id)
        return product?.quantity
    }


    let data = {
        cart,
        addToCart,
        getTotalQuantityByID
    }

  return <CartContext.Provider value={ data }> {children} </CartContext.Provider>
}

export default CartContextProvider