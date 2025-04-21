/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function RelatedProducts({ category, subCategory, currentProductID }) {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(
    function () {
      if (products.length > 0) {
        let productsCopy = products.slice();

        productsCopy = productsCopy.filter(
          (item) =>
            category === item.category &&
            item.subCategory === subCategory &&
            item._id !== currentProductID
        );

        // console.log(productsCopy.slice(0, 4));
        setRelated(productsCopy.slice(0, 4));
      }
    },
    [products, category, subCategory, currentProductID]
  );

  return (
    <div className="my-24">
      <div className="text-center text-4xl py-6">
        <Title text1={"Related"} text2={"Products"} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-6">
        {related.map((item, i) => (
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
  );
}
export default RelatedProducts;
