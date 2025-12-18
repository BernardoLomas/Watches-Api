import { CartItemDTO } from "../dtos/cart.dto";
import { validateQuantity, getProductOrFail } from "./helpers";
export class CartService {
  static async addItem(item: CartItemDTO) {
    return this.buildCardItem(item);
  }

  static async updateItem(item: CartItemDTO) {
    return this.buildCardItem(item);
  }

  private static async buildCardItem(item: CartItemDTO) {
    validateQuantity(item.quantity);

    const product = await getProductOrFail(item.productId);

    return {
      product,
      quantity: item.quantity,
      subtotal: product.price * item.quantity,
    };
  }
}
