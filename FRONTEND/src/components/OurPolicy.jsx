import { assets } from "../assets/frontend_assets/assets";

function OurPolicy() {
  return (
    <div className="mb-20 mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-around gap-6 sm:gap-4 lg:gap-14 text-center">
      <div className="border-primary rounded-2xl bg-cyan-950 shadow-2xl py-4 px-2 border-2">
        <img
          src={assets.exchange}
          alt="exchange"
          className="w-12 m-auto mb-5 p-2 border-2 rounded-full border-secondary bg-cyan-800"
        />

        <span className="font-bold text-xl sm:text-base lg:text-xl text-gray-500">
          Easy Exchange Policy
        </span>
        <p className="text-gray-400 text-base sm:text-sm lg:text-base">
          Changed your mind? Our simple exchange process is here for you!
        </p>
      </div>

      <div className="border-primary rounded-2xl bg-cyan-950 shadow-2xl py-4 px-2 border-2">
        <img
          src={assets.quality}
          alt="exchange"
          className="w-12 m-auto mb-5 p-2 border-2 rounded-full border-secondary bg-cyan-800"
        />

        <span className="font-bold text-xl sm:text-base lg:text-xl text-gray-500">
          7 Days Return Policy
        </span>
        <p className="text-gray-400 text-base sm:text-sm lg:text-base">
          Shop with confidence! Enjoy 7 Days Return Policy!
        </p>
      </div>

      <div className="border-primary rounded-2xl bg-cyan-950 shadow-2xl py-4 px-2 border-2">
        <img
          src={assets.support}
          alt="exchange"
          className="w-12 m-auto mb-5 p-2 border-2 rounded-full border-secondary bg-cyan-800"
        />

        <span className="font-bold text-xl sm:text-base lg:text-xl text-gray-500">
          Best customer support
        </span>
        <p className="text-gray-400 text-base sm:text-sm lg:text-base">
          We’re here for you! Enjoy our friendly customer support!
        </p>
      </div>
    </div>
  );
}
export default OurPolicy;
