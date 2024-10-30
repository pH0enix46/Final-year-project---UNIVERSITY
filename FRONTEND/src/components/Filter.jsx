/* eslint-disable react/prop-types */
import { assets } from "../assets/frontend_assets/assets";

function Filter({ showFilter, setShowFilter }) {
  return (
    <div>
      {/* ⏺ FILTER PART */}
      <div className="lg:min-w-52 md:min-w-40 sm:min-w-32">
        <h4
          className="my-2 text-lg flex items-center cursor-pointer gap-2 pl-2 sm:hidden"
          onClick={() => setShowFilter(!showFilter)}
        >
          <span className="text-sm">FILTERS</span>
          <img
            src={assets.dropdown_icon}
            alt="drop-down"
            className={`h-4 sm:hidden ${showFilter ? "rotate-90" : ""} pb-1`}
          />
        </h4>

        {/* CATEGORY */}
        <div
          className={`border-2 border-gray-500 p-2 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block rounded-md shadow-md text-center sm:w-auto w-1/2`}
        >
          <h5 className="mb-3 text-sm font-medium border-b border-gray-500">
            PROCESSOR
          </h5>
          <div>
            <div className="form-control">
              <label className="label cursor-pointer justify-normal gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs"
                  value={"M1"}
                />
                <span className="label-text">M1</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-normal gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs"
                  value={"M2"}
                />
                <span className="label-text">M2</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-normal gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs"
                  value={"M3"}
                />
                <span className="label-text">M3</span>
              </label>
            </div>
          </div>
        </div>

        {/* SUB-CATEGORY */}
        <div
          className={`border-2 border-gray-500 p-2 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block rounded-md shadow-md text-center sm:w-auto w-1/2`}
        >
          <h5 className="mb-3 text-sm font-medium border-b border-gray-500">
            TYPE
          </h5>
          <div>
            <div className="form-control">
              <label className="label cursor-pointer justify-normal gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs"
                  value={"Air"}
                />
                <span className="label-text">Air</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-normal gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs"
                  value={"Pro"}
                />
                <span className="label-text">Pro</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-normal gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs"
                  value={"Max"}
                />
                <span className="label-text">Max</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* ⏺ FILTER PART END */}
    </div>
  );
}
export default Filter;
