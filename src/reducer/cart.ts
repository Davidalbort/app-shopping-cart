import { CartProduct } from "../constants/type.td"

export type ActionCart =
  | {
      type: "@cart/ADD_PRODUCT"
      payload?: CartProduct
    }
  | {
      type: "@cart/REMOVE_PRODUCT"
      payload?: CartProduct
    }
  | {
      type: "@cart/RESET_CART"
      payload?: CartProduct
    }

export const CART_ACTIONS_TYPE = {
  ADD_PRODUCT: "@cart/ADD_PRODUCT",
  REMOVE_PRODUCT: "@cart/REMOVE_PRODUCT",
  RESET_CART: "@cart/RESET_CART",
} as const

export const UPDATE_STATE_BY_CART_ACTION = {
  [CART_ACTIONS_TYPE.ADD_PRODUCT]: (
    state: CartProduct[],
    payload: CartProduct
  ) => {
    const isProductExist = state.some((product) => product.id === payload.id)
    if (!isProductExist) {
      const newState = [...state, payload]
      updateLocalStorageCart(newState)
      return newState
    }
    const newState = state.map((product) => {
      if (product.id === payload.id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        }
      }
      return product
    })
    updateLocalStorageCart(newState)
    return newState
  },

  [CART_ACTIONS_TYPE.REMOVE_PRODUCT]: (
    state: CartProduct[],
    payload: CartProduct
  ) => {
    const isProductExist = state.some((product) => product.id === payload.id)
    if (!isProductExist) return state
    const newState = state.filter((product) => product.id !== payload.id)
    updateLocalStorageCart(newState)
    return newState
  },

  [CART_ACTIONS_TYPE.RESET_CART]: () => {
    updateLocalStorageCart([])
    return []
  },
}

export function cartReducer(state: CartProduct[], action: ActionCart) {
  const { type, payload } = action
  const updateState = UPDATE_STATE_BY_CART_ACTION[type]
  if (payload && "payload" in action) {
    return updateState ? updateState(state, payload) : state
  }
  return updateState ? updateState(state, payload as CartProduct) : state
}

export const cartInitialState = JSON.parse(
  window.localStorage?.getItem("cart") || "[]"
)
export const updateLocalStorageCart = (cart: CartProduct[]) => {
  window.localStorage.setItem("cart", JSON.stringify(cart))
}
