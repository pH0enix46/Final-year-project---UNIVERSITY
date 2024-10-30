import Filter from "../components/Filter.jsx";
import AllCollection from "../components/AllCollection.jsx";

function Collection() {
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-8 md:gap-4 pt-10">
      <Filter />
      <AllCollection />
    </div>
  );
}
export default Collection;
