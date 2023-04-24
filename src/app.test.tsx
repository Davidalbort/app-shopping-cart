import { render, screen } from "@testing-library/react"
import fireEvent from "@testing-library/user-event"
import { App } from "./App"

describe("<App />", () => {
  test("Should work", () => {
    render(<App />)
  })
  test("Should display Title", () => {
    render(<App />)
    const title = screen.getByRole("heading", { name: "Shopping 🛒" })
    expect(title).toBeInTheDocument()
  })
  test("Should show list of products", () => {
    render(<App />)
    const products = screen.getAllByRole("listitem")
    products.forEach((product) => {
      expect(product).toBeInTheDocument()
    })
  })
  test("Should filter products by category", async () => {
    render(<App />)
    const filterCategory = screen.getByLabelText("Category")
    await fireEvent.selectOptions(filterCategory, "smartphones")
    const productSmartPhones = screen.getAllByRole("listitem")
    expect(productSmartPhones.length).toBeGreaterThan(4)
  })
})
