import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(
    function () {
      const bestProduct = products.filter((item) => item.bestseller);

      setBestSeller(bestProduct.slice(0, 4));
    },
    [products]
  );

  return (
    <div className="my-20">
      {/* ⏺ TITLE */}
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-5/6 sm:w-3/4 m-auto text-sm sm:text-base lg:text-lg text-gray-400">
          Discover our best-sellers, handpicked and loved by customers like you!
          Shop now and find the top products everyone’s talking about
        </p>
      </div>
      {/* ⏺ TITLE END */}

      {/* ⏺ BEST SELLER PRODUCTS */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 w-[500px] sm:w-auto">
          {bestSeller.map((item, i) => (
            <ProductItem
              key={i}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
      {/* ⏺ BEST SELLER PRODUCTS END */}
    </div>
  );
}
export default BestSeller;
