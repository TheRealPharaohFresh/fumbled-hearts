export interface CartItem {
  id: string
  title: string
  color: string
  price: number
  quantity: number
  image: string
  sku?: string
}

export interface ShippingInfo {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface Order {
  id: string
  items: CartItem[]
  shippingInfo: ShippingInfo
  subtotal: number
  shipping: number
  tax: number
  total: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered'
  createdAt: string
}
