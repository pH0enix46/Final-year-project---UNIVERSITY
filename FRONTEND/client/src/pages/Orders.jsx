import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./../components/Title";

function Orders() {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="border-t border-b border-gray-500 text-gray-400 p-4  flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                className="w-16 sm:w-20 rounded-md overflow-hidden shadow-lg"
                src={item.image[0]}
                alt="product_img"
              />

              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-400">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Color: Starlight</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">16/feb/2025</span>
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500 shadow-lg"></p>
                <p className="text-sm sm:text-base">Ready to ship</p>
              </div>

              <button className="border-2 border-gray-500 px-4 py-2 text-sm font-medium rounded-lg shadow-xl ">
                Track Order!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Orders;
