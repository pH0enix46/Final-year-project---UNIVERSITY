import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

function Cart() {
  const { products, currency, cartItems, updatedQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const colorToImageMapping = {
    Silver: 1,
    Space_Gray: 2,
    Starlight: 3,
    Midnight: 4,
  };

  useEffect(
    function () {
      const tempData = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              color: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      // console.log(tempData);
      setCartData(tempData);
    },
    [cartItems]
  );

  return (
    <div className="p-14">
      <div className="text-3xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="py-4 px-4 lg:px-6 lg:py-6 border rounded-xl border-secondary shadow-lg text-gray-400 grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-20 mb-6"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <img
                  src={productData.image[colorToImageMapping[item.color]]}
                  alt="selected_item"
                  className="w-14 sm:w-20 object-cover rounded-xl shadow-lg"
                />

                <div>
                  <h4 className="text-sm sm:text-lg md:text-base lg:text-lg font-semibold">
                    {productData.name}
                  </h4>
                  <div className="flex items-center gap-2 sm:gap-5 mt-2 text-sm sm:text-lg">
                    <span>
                      {currency}
                      {productData.price}
                    </span>
                    <span className="px-2 sm:px-3 py-1 border border-primary bg-secondary rounded-lg shadow-sm text-xs sm:text-sm">
                      {item.color}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  className="border border-secondary max-w-10 sm:max-w-14 px-1 py-1 bg-brand rounded-lg shadow-sm focus:outline-none focus:border-secondary"
                />

                <div
                  className="p-2 bg-primary rounded-full cursor-pointer shadow-md w-8 sm:w-12 flex justify-center"
                  onClick={() => updatedQuantity(item._id, item.color, 0)}
                >
                  <img
                    src={assets.bin_icon}
                    alt="delete_the_product"
                    className="w-6"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Cart;
