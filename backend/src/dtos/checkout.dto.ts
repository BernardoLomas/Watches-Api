export interface CheckoutItemDTO {
    productId: number
    quantity: number
}

export interface CheckoutDTO {
    items: CheckoutItemDTO[]
}