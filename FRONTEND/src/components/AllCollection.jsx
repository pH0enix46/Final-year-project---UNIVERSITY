import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

function AllCollection() {
  const { products } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(
    function () {
      setFilterProducts(products);
    },
    [products]
  );

  return (
    <div className="flex-1">
      <div className="flex justify-between text-base sm:text-2xl mb-4 items-center">
        <span className="lg:ml-8 md:ml-4 text-base sm:text-lg md:text-xl lg:text-2xl ">
          <Title text1={"ALL"} text2={"COLLECTION"} />
        </span>

        {/* ⏺ SORT */}
        <select className="select select-bordered w-auto bg-brand border-2 shadow-md text-xs sm:text-sm">
          <option value={"Default"}>Sort by-- Default</option>
          <option value={"Low > High"}>Sort by-- Low &gt; High</option>
          <option value={"High > Low"}>Sort by-- High &gt; Low</option>
        </select>
        {/* ⏺ SORT END */}
      </div>

      {/* ⏺ ALL-PRODUCT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
        {filterProducts.map((item, i) => (
          <ProductItem
            key={i}
            name={item.name}
            id={item._id}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
      {/* ⏺ ALL-PRODUCT END */}
    </div>
  );
}
export default AllCollection;
