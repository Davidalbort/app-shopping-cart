export interface ProductsFromAPI {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  category: string
  image: string
}

export interface CartProduct extends Product {
  quantity: number
}

export interface CartContextState {
  products: CartProduct[]
  addProduct(product: CartProduct): void
  removeProduct(product: CartProduct): void
  resetProducts(): void
}
