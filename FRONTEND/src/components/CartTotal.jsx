import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl pl-4">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm shadow-lg p-4 rounded-xl border border-primary">
        <div className="flex justify-between border-b border-b-secondary my-2">
          <span>Subtotal</span>
          <span>
            {getCartAmount()}
            {currency}
          </span>
        </div>
        <div className="flex justify-between border-b border-b-secondary my-2">
          <span>Shipping Fee</span>
          <span>
            {delivery_fee}
            {currency}
          </span>
        </div>
        <div className="flex justify-between border-b border-b-secondary">
          <span>
            <strong>Total</strong>
          </span>
          <span>
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
            {currency}
          </span>
        </div>
      </div>
    </div>
  );
}
export default CartTotal;
