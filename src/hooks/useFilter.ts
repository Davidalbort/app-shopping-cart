import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"
import { Product } from "../constants/type.td"

export function useFilter() {
  const value = useContext(FilterContext)
  const { filters, updateCategory, updatePrice } = value
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
