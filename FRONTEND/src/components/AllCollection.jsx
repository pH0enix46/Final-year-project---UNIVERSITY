import Title from "./Title";

function AllCollection() {
  return (
    <div className="flex-1">
      <div className="flex justify-between text-base sm:text-2xl mb-4">
        <span className="lg:ml-8 md:ml-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
        </span>

        {/* ⏺ SORT */}
        <select className="select select-bordered w-auto bg-brand border-2 shadow-md">
          <option value={"Default"}>Sort by-- Default</option>
          <option value={"Low > High"}>Sort by-- Low &gt; High</option>
          <option value={"High > Low"}>Sort by-- High &gt; Low</option>
        </select>
        {/* ⏺ SORT END */}
      </div>
    </div>
  );
}
export default AllCollection;
