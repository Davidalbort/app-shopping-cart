import { cleanup, render, screen } from "@testing-library/react"
import fireEvent from "@testing-library/user-event"
import { Products } from "./Products"

const mockAddProduct = jest.fn()
const mockRemoveProduct = jest.fn()
jest.mock("../../hooks/useCart", () => ({
  useCart: () => ({
    products: [],
    addProduct: mockAddProduct,
    removeProduct: mockRemoveProduct,
  }),
}))
describe("<Products />", () => {
  afterEach(() => {
    cleanup
    jest.clearAllMocks()
  })
  test("Should render", () => {
    render(<Products products={mockProducts} />)
  })
  test("Should display image of product with attribute src, title", () => {
    render(<Products products={mockProducts} />)
    const images = screen.getAllByRole("img")
    images.forEach((image, index) => {
      const expectedAttributeSrc = mockProducts[index].image
      const expectedAttributeAlt = mockProducts[index].title
      expect(image).toHaveAttribute("src", expectedAttributeSrc)
      expect(image).toHaveAttribute("alt", expectedAttributeAlt)
    })
  })
  test("Should display title of product and price", () => {
    render(<Products products={mockProducts} />)
    const titles = screen.getAllByRole("heading")
    const prices = screen.getAllByRole("textbox")

    titles.forEach((title, index) => {
      const expectTitle = mockProducts[index].title
      expect(title).toHaveTextContent(expectTitle)
    })
    prices.forEach((price, index) => {
      const expectPrice = String(mockProducts[index].price)
      expect(price.textContent).toEqual(expectPrice)
    })
  })
  test("Should display button by add to cart and when clicked should call addToCart", async () => {
    render(<Products products={mockProducts} />)
    const buttonAddToCart = screen.getByTestId("add-to-cart")
    expect(buttonAddToCart).toBeInTheDocument()
    await fireEvent.click(buttonAddToCart)
    expect(mockAddProduct).toHaveBeenCalledTimes(1)
    expect(mockRemoveProduct).not.toBeCalled()
  })
  test("Should display button by remove from cart and when clicked should call removeFromCart", async () => {
    render(<Products products={mockProducts} />)
    const buttonRemoveFromCart = screen.getByTestId("remove-from-cart")
    expect(buttonRemoveFromCart).toBeInTheDocument()
    await fireEvent.click(buttonRemoveFromCart)
    expect(mockAddProduct).not.toBeCalled
    expect(mockRemoveProduct).toHaveBeenCalledTimes(1)
  })
})

export const mockProducts = [
  {
    id: 30,
    title: "Key Holder",
    description:
      "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    price: 30,
    category: "home-decoration",
    image: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
  },
]
