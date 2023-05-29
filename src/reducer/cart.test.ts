import { CartProduct } from "../constants/type.td"
import { ActionCart, cartReducer } from "./cart"
import deepFreeze from "deep-freeze"

describe("cartReducer", () => {
  test("Should add product  to cart when type is ADD_PRODUCT", () => {
    const state: CartProduct[] = []
    const action: ActionCart = {
      type: "@cart/ADD_PRODUCT",
      payload: {
        id: 30,
        title: "Key Holder",
        description:
          "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        category: "home-decoration",
        image: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
        quantity: 1,
      },
    }
    const expectState = [
      {
        id: 30,
        title: "Key Holder",
        description:
          "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        category: "home-decoration",
        image: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
        quantity: 1,
      },
    ]
    const newState = cartReducer(state, action)
    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(expectState[0])
  })
  test("Should increment property quantity when the product added to cart is same", () => {
    const state: CartProduct[] = [
      {
        id: 30,
        title: "Key Holder",
        description:
          "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        category: "home-decoration",
        image: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
        quantity: 1,
      },
    ]
    const action: ActionCart = {
      type: "@cart/ADD_PRODUCT",
      payload: {
        id: 30,
        title: "Key Holder",
        description:
          "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        category: "home-decoration",
        image: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
        quantity: 1,
      },
    }
    const expectState = [
      {
        id: 30,
        title: "Key Holder",
        description:
          "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        category: "home-decoration",
        image: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
        quantity: 2,
      },
    ]
    const newState = cartReducer(state, action)
    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(expectState[0])
  })
  test("Should remove product when type is REMOVE_PRODUCT", () => {
    const state: CartProduct[] = [
      {
        id: 30,
        title: "Key Holder",
        description:
          "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        category: "home-decoration",
        image: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
        quantity: 1,
      },
    ]
    const action: ActionCart = {
      type: "@cart/REMOVE_PRODUCT",
      payload: {
        id: 30,
        title: "Key Holder",
        description:
          "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        category: "home-decoration",
        image: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
        quantity: 1,
      },
    }
    deepFreeze(state)
    const newState = cartReducer(state, action)
    expect(newState).toHaveLength(0)
  })
  test("Should reset cart when type is RESET_CART", () => {
    const state = [
      {
        id: 30,
        title: "Key Holder",
        description:
          "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        category: "home-decoration",
        image: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
        quantity: 1,
      },
      {
        id: 6,
        title: "MacBook Pro",
        description:
          "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 1749,
        category: "laptops",
        image: "https://i.dummyjson.com/data/products/6/thumbnail.png",
        quantity: 1,
      },
    ]
    const action: ActionCart = {
      type: "@cart/RESET_CART",
    }
    deepFreeze(state)
    const newState = cartReducer(state, action)
    expect(newState).toHaveLength(0)
  })
})
