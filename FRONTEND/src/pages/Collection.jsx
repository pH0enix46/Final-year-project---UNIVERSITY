import Filter from "../components/Filter.jsx";
import AllCollection from "../components/AllCollection.jsx";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";

function Collection() {
  const { products } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(filterProducts.length / itemsPerPage);

  const currentItems = filterProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(
    function () {
      setFilterProducts(products);
    },
    [products]
  );

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-8 md:gap-4 pt-10">
      <Filter setFilterProducts={setFilterProducts} />

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
