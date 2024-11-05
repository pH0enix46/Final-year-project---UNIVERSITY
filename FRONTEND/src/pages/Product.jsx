import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Product() {
  const { productID } = useParams();
  // console.log(productID);
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  async function fetchProductData() {
    products.map((item) => {
      if (item._id === productID) {
        setProductData(item);
        // console.log(item);
        setImage(item.image[0]);
        return null;
      }
    });
  }

  useEffect(
    function () {
      fetchProductData();
    },
    [productID, products]
  );

  return productData ? (
    <div className="border-t-2 border-t-gray-500 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ⏺ PRODUCT DATA */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ⏺ PRODUCT IMAGE */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, i) => (
              <img
                src={item}
                alt="product_image"
                key={i}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer object-cover"
              />
            ))}
          </div>
        </div>
        {/* ⏺ PRODUCT IMAGE END */}
      </div>
      {/* ⏺ PRODUCT DATA END */}
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}
export default Product;
