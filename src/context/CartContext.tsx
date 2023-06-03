import { createContext, useReducer } from "react"
import { CartContextState, CartProduct } from "../constants/type.td"
import { cartInitialState, cartReducer } from "../reducer/cart"

interface CartProviderProps {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextState)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [products, dispatch] = useReducer(cartReducer, cartInitialState)
  const addProducts = (product: CartProduct) => {
    dispatch({
      type: "@cart/ADD_PRODUCT",
      payload: product,
    })
  }
  const removeProducts = (product: CartProduct) => {
    dispatch({
      type: "@cart/REMOVE_PRODUCT",
      payload: product,
    })
  }
  const resetProducts = () => {
    dispatch({
      type: "@cart/RESET_CART",
    })
  }
  const values: CartContextState = {
    products: products,
    addProduct: addProducts,
    removeProduct: removeProducts,
    resetProducts: resetProducts,
  }
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}
