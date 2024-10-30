import Title from "./Title";

function AllCollection() {
  return (
    <div className="flex-1">
      <div className="flex justify-between text-base sm:text-2xl mb-4">
        <span className="lg:ml-8 md:ml-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
        </span>
      </div>
    </div>
  );
}
export default AllCollection;
