import Title from "../components/Title";
import { IoLogoFacebook, IoLogoYoutube } from "react-icons/io";

function Contact() {
  return (
    <div>
      <div className="pt-8">
        <div className="text-4xl text-center">
          <Title text1={"Contact"} text2={"Us"} />
        </div>

        <div className="flex flex-col lg:flex-row px-8 mt-8 justify-between gap-10">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl py-2 px-4 shadow-lg rounded-lg border-t-2 border-t-gray-500 text-center">
              Visit Our Store
            </h3>

            <div>
              <h5 className="text-cyan-600 text-2xl">Address</h5>
              <div className="flex flex-col gap-2">
                <span>
                  Basement 3, Shop 27, <br />
                  Bashundhara City Shopping Complex
                </span>
                <span>
                  Level 4, Zone A (West Court), Shop 23D, <br />
                  Jamuna Future Park
                </span>
                <span>
                  Level 3, Shop 507,
                  <br />
                  Mascot Plaza - Uttara
                </span>
              </div>
            </div>

            <div>
              <h5 className="text-cyan-600 text-2xl">Phone</h5>
              <span>01832865677</span>
            </div>

            <div>
              <h5 className="text-cyan-600 text-2xl">Email</h5>
              <span>meow@gmail.com</span>
            </div>

            <div className="flex gap-3 opacity-80">
              <a href="https://www.facebook.com/MDJoy46/" target="_blank">
                <div className="flex items-center justify-center w-12 h-12 bg-[rgba(24,118,242,0.8)] text-gray-300 rounded-full cursor-pointer shadow-inner">
                  <IoLogoFacebook size={24} />
                </div>
              </a>
              <a
                href="https://www.youtube.com/@MDJOY0460/featured"
                target="_blank"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[rgba(255,0,0,0.6)] text-gray-300 rounded-full cursor-pointer shadow-inner">
                  <IoLogoYoutube size={24} />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-3xl py-2 px-4 shadow-lg rounded-lg border-t-2 border-t-gray-500 text-center lg:inline-block">
              Get in Touch
            </h3>
            <p className="mt-4 text-lg">
              If you’ve got great products your making or looking to work with
              us then drop us a line
            </p>

            <form>
              <div className="flex flex-col lg:flex-row mt-8 gap-5 mb-4">
                <label className="input input-bordered flex items-center gap-2 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Username"
                    required
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Email"
                    required
                  />
                </label>
              </div>

              <textarea
                className="textarea textarea-bordered w-full h-44 text-lg"
                placeholder="Your message"
                required
              ></textarea>

              <button className="btn btn-active btn-neutral w-full mt-4 text-gray-400 text-lg">
                Send Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
