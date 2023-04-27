import { createContext, useState } from "react"

interface FilterProviderProps {
  children: React.ReactNode
}

interface StateFilterContext {
  filters: Filters
  updatePrice(number: number): void
  updateCategory(category: string): void
}
export type Filters = {
  category: string
  price: number
}

export const FilterContext = createContext({} as StateFilterContext)

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filters, setFilters] = useState<Filters>({
    category: "all",
    price: 10,
  })
  const updatePrice = (number: number) => {
    setFilters({ ...filters, price: number })
  }
  const updateCategory = (category: string) => {
    setFilters({ ...filters, category: category })
  }
  const filterContext: StateFilterContext = {
    filters: filters,
    updateCategory: updateCategory,
    updatePrice: updatePrice,
  }
  return (
    <FilterContext.Provider value={filterContext}>
      {children}
    </FilterContext.Provider>
  )
}
