import Filter from "../components/Filter.jsx";
import AllCollection from "../components/AllCollection.jsx";

function Collection() {
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      <Filter />
      <AllCollection />
    </div>
  );
}
export default Collection;
