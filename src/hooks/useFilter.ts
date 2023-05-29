import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"
import { Product } from "../constants/type.td"

export function useFilter() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider")
  }
  const { filters, updateCategory, updatePrice } = context
  const filterProduct = (products: Product[]): Product[] => {
    return products.filter((product) => {
      return (
        product.price >= filters?.price &&
        (filters.category === "all" || product.category === filters.category)
      )
    })
  }

  return { filterProduct, updateCategory, updatePrice, filters }
}
