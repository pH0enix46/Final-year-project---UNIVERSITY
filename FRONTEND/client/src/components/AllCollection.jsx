/* eslint-disable react/prop-types */
import Title from "./Title";
import ProductItem from "./ProductItem";

function AllCollection({
  currentItems,
  handlePageChange,
  currentPage,
  totalPages,
  setSortType,
}) {
  return (
    <div className="flex-1">
      <div className="flex justify-between mb-4 items-center">
        <span className="lg:ml-8 md:ml-4 text-base sm:text-lg md:text-xl lg:text-2xl ">
          <Title text1={"ALL"} text2={"COLLECTION"} />
        </span>

        {/* ⏺ SORT */}
        <select
          onChange={(e) => setSortType(e.target.value)}
          className="select select-bordered w-auto bg-brand border-2 shadow-md text-xs sm:text-sm"
        >
          <option value={"Default"}>Sort by-- Default</option>
          <option value={"Low > High"}>Sort by-- Low &gt; High</option>
          <option value={"High > Low"}>Sort by-- High &gt; Low</option>
        </select>
        {/* ⏺ SORT END */}
      </div>

      {/* ⏺ ALL-PRODUCT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 gap-y-6">
        {currentItems.map((item, i) => (
          <ProductItem
            key={i}
            name={item.name}
            id={item._id}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <div className="join shadow-xl">
          <button
            className="join-item btn text-3xl"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span className="mt-[-10px]">«</span>
          </button>

          {/* Current Page Display */}
          <button className="bg-cyan-950 border-cyan-950 join-item btn hover:bg-sky-950 hover:border-sky-950 text-gray-400">
            Page {currentPage} of {totalPages}
          </button>

          <button
            className="join-item btn text-3xl"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span className="mt-[-10px]">»</span>
          </button>
        </div>
      </div>
      {/* ⏺ ALL-PRODUCT END */}
    </div>
  );
}
export default AllCollection;
