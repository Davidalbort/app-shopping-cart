import { render, screen } from "@testing-library/react"
import fireEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import { Cart } from "./Cart"

// Mock the custom hook useCart
const mockAddProduct = jest.fn()
jest.mock("../../hooks/useCart", () => ({
  useCart: () => ({
    products: mockProductsAdd,
    addProduct: mockAddProduct,
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
  test("Should show products that was added", () => {
    render(<Cart />)
    const products = screen.getAllByRole("listitem")
    const lengthMockProducts = mockProductsAdd.length
    expect(products).toHaveLength(lengthMockProducts)
  })
  test("Should call addProduct when user clicked button add", async () => {
    render(<Cart />)
    const addButton = screen.getByTestId("add-to-cart")
    expect(addButton)
    await fireEvent.click(addButton)
    expect(mockAddProduct).toBeCalledTimes(1)
  })
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
]
