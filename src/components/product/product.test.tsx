import { cleanup, render, screen } from "@testing-library/react"
import fireEvent from "@testing-library/user-event"
import { Products } from "./Product"

describe("<Cart />", () => {
  afterEach(() => cleanup)
  test("Should render", () => {
    const addToCart = jest.fn()
    render(<Products products={mockProducts} handleAddToCart={addToCart} />)
  })
  test("Should display image of product with attribute src, title", () => {
    const addToCart = jest.fn()
    render(<Products products={mockProducts} handleAddToCart={addToCart} />)
    const images = screen.getAllByRole("img")
    images.forEach((image, index) => {
      const expectedAttributeSrc = mockProducts[index].image
      const expectedAttributeAlt = mockProducts[index].title
      expect(image).toHaveAttribute("src", expectedAttributeSrc)
      expect(image).toHaveAttribute("alt", expectedAttributeAlt)
    })
  })
  test("Should display title of product and price", () => {
    const addToCart = jest.fn()
    render(<Products products={mockProducts} handleAddToCart={addToCart} />)
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
    const addToCart = jest.fn()
    render(<Products products={mockProducts} handleAddToCart={addToCart} />)
    const buttonAddToCart = screen.getAllByTestId("add-to-cart")
    buttonAddToCart.forEach(async (button) => {
      await fireEvent.click(button)
      expect(button).toBeInTheDocument()
      expect(addToCart).toHaveBeenCalledTimes(1)
    })
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
  {
    id: 6,
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    category: "laptops",
    image: "https://i.dummyjson.com/data/products/6/thumbnail.png",
  },
]
