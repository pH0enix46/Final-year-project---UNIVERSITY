import { useContext, useState } from "react";
import ShopContext from "../context/ShopContext.jsx";
import Filter from "../components/Filter.jsx";
import AllCollection from "../components/AllCollection.jsx";

function Collection() {
  // const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      <Filter showFilter={showFilter} setShowFilter={setShowFilter} />
      <AllCollection />
    </div>
  );
}
export default Collection;
