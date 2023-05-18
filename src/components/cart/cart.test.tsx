import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Cart } from "./Cart"

// Mock the custom hook useCart
jest.mock("../../hooks/useCart", () => ({
  useCart: () => ({
    products: mockProductsAdd,
    addProduct: jest.fn(),
    removeProduct: jest.fn(),
    resetProducts: jest.fn(),
  }),
}))

describe("<Cart/>", () => {
  test("should render the component, with title", () => {
    render(<Cart />)
    const title = screen.getByRole("heading", { name: /Cart/i })
    expect(title).toBeInTheDocument()
  })
})
test("Should show products that was added", () => {
  render(<Cart />)
  const products = screen.getAllByRole("listitem")
  expect(products).toHaveLength(2)
})

export const mockProductsAdd = [
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
