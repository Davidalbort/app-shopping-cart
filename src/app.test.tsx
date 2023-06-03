import { render, screen, within } from "@testing-library/react"
import fireEvent from "@testing-library/user-event"
import { App } from "./App"
import { FilterProvider } from "./context/FilterContext"

describe("<App />", () => {
  test("Should work", () => {
    render(<App />)
  })
  test("Should display Title", () => {
    render(<App />)
    const title = screen.getByRole("heading", { name: "Shopping 🛒" })
    expect(title).toBeInTheDocument()
  })
  test("Should show list of products", async () => {
    render(
      <FilterProvider>
        <App />
      </FilterProvider>
    )
    const products = await screen.getAllByRole("listitem")
    products.forEach((product) => {
      expect(product).toBeInTheDocument()
    })
  })
  test("Should filter products by category", async () => {
    render(
      <FilterProvider>
        <App />
      </FilterProvider>
    )
    const filterCategory = screen.getByLabelText("Category")
    await fireEvent.selectOptions(filterCategory, "smartphones")
    const productSmartPhones = screen.getAllByRole("listitem")
    expect(productSmartPhones.length).toBeGreaterThan(4)
  })
  test("Should open cart when click on button cart and close when click again on button cart", async () => {
    render(
      <FilterProvider>
        <App />
      </FilterProvider>
    )
    const buttonCart = screen.getByRole("button", { name: "Cart" })
    await fireEvent.click(buttonCart)
    const cart = screen.getByRole("heading", { name: "Cart" })
    expect(cart).toBeInTheDocument()
    await fireEvent.click(buttonCart)
    expect(cart).not.toBeInTheDocument()
  })
  test(`Should add product to cart when user clicked in button add-to-Cart,
  and increment quantity when clicked in button to add the same product`, async () => {
    render(
      <FilterProvider>
        <App />
      </FilterProvider>
    )
    const products = screen.getAllByRole("listitem")
    const firstProduct = products[0]
    const addButton = within(firstProduct).getByTestId("add-to-cart")
    await fireEvent.click(addButton)
    const buttonCart = screen.getByRole("button", { name: "Cart" })
    await fireEvent.click(buttonCart)
  })
})
