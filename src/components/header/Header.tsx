import { useState } from "react"
import { Cart } from "../cart/Cart"
import { Filter } from "../filter/Filter"

export function Header() {
  const [toggleCart, setToggleCart] = useState(false)
  return (
    <header className="app__header">
      <h1 className="app__title">Shopping 🛒</h1>
      <button onClick={() => setToggleCart(!toggleCart)}>Cart</button>
      {toggleCart ? <Cart /> : null}
      <Filter />
    </header>
  )
}
