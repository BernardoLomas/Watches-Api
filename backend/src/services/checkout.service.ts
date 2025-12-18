import { CheckoutDTO } from "../dtos/checkout.dto";
import { validateQuantity, getProductOrFail } from "./helpers";

export class CheckoutService {
  static async process(checkout: CheckoutDTO) {
    if (!checkout.items || checkout.items.length === 0) {
      throw new Error("The cart is empty!");
    }

    let total = 0;

    for (const item of checkout.items) {
      validateQuantity(item.quantity);

      const product = await getProductOrFail(item.productId);
      total += product.price * item.quantity;
    }

    return {
      status: "Success!",
      message: "Ordem succesfully placed!",
      total,
    };
  }
}
