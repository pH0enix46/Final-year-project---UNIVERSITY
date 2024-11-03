import Filter from "../components/Filter.jsx";
import AllCollection from "../components/AllCollection.jsx";
import { useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets.js";

function Collection() {
  const [filterProducts, setFilterProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(filterProducts.length / itemsPerPage);

  const currentItems = filterProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function toggleCategory(e) {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  }

  function toggleSubCategory(e) {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  }

  function applyFilter() {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
    setCurrentPage(1);
  }

  useEffect(
    function () {
      applyFilter();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [category, subCategory]
  );

  // ⏺ TEST
  // useEffect(
  //   function () {
  //     // console.log(category);
  //     console.log(subCategory);
  //   },
  //   [category, subCategory]
  // );

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-8 md:gap-4 pt-10">
      <Filter
        toggleCategory={toggleCategory}
        toggleSubCategory={toggleSubCategory}
      />

      <AllCollection
        currentItems={currentItems}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
export default Collection;
