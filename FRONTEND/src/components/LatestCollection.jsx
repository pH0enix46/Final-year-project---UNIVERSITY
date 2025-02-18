import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  //   console.log(products);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(
    function () {
      setLatestProducts(products.slice(0, 8));
    },
    [products]
  );

  return (
    <div className="my-14" id="#latest">
      {/* ⏺ TITLE */}
      <div className="text-center py-8 text-3xl">
        <span className="text-3xl lg:text-4xl">
          <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        </span>
        <p className="lg:w-10/12 m-auto text-base lg:text-lg text-gray-400">
          Explore our latest tech collections! Discover new gadgets and
          accessories to make your life easier. Find the perfect items to stay
          up-to-date with the latest trends!
        </p>
      </div>
      {/* ⏺ TITLE END */}

      {/* ⏺ LATEST PRODUCTS */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 w-[500px] sm:w-auto">
          {latestProducts.map((item, i) => (
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
      {/* ⏺ LATEST PRODUCTS END */}
    </div>
  );
}
export default LatestCollection;
