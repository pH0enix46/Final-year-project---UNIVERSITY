import Filter from "../components/Filter.jsx";
import AllCollection from "../components/AllCollection.jsx";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";

function Collection() {
  const [filterProducts, setFilterProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("Default");
  const { products, search, showSearch } = useContext(ShopContext);
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

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

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

  function sortProduct() {
    let filterProductCopy = filterProducts.slice();

    switch (sortType) {
      case "Low > High":
        setFilterProducts(filterProductCopy.sort((a, b) => a.price - b.price));
        break;

      case "High > Low":
        setFilterProducts(filterProductCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(
    function () {
      applyFilter();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [category, subCategory, search, showSearch]
  );

  useEffect(
    function () {
      sortProduct();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sortType]
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
        setSortType={setSortType}
      />
    </div>
  );
}
export default Collection;
