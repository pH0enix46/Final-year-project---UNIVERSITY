import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets.js";

function About() {
  return (
    <div>
      <div className="pt-8">
        <div className="text-3xl text-center">
          <Title text1={"ABOUT"} text2={"US"} />
        </div>

        <div className="my-10 flex flex-col md:flex-row gap-16">
          <img
            src={assets.aboutUs_image}
            alt="about-us_image"
            className="rounded-lg shadow-lg w-full md:max-w-[450px] object-cover"
          />

          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-400 text-lg">
            <p>
              At{" "}
              <strong className="text-2xl italic border-b border-b-gray-400">
                Machaven
              </strong>
              , we are passionate about bringing the best of Apple’s innovation
              to your hands. As a trusted destination for MacBook enthusiasts,
              we combine a deep understanding of technology with a commitment to
              delivering exceptional service
            </p>
            <p>
              <strong className="text-xl italic">Our mission is simple</strong>,
              to provide high-quality MacBooks that empower students,
              professionals, and creatives to unlock their potential and achieve
              greatness. Whether you’re upgrading your setup, stepping into the
              world of Apple for the first time, or looking for expert advice,
              Machaven is here to guide you every step of the way
            </p>
            <p>
              With a focus on <em>quality</em>, <em>affordability</em>, and{" "}
              <em>customer satisfaction</em>. Machaven makes premium MacBooks
              accessible to all. Your journey to excellence starts here
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="text-2xl mt-20 ml-4">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>

        <div className="text-lg flex flex-col gap-14">
          <div className="border-2 m-3 p-3 rounded-xl shadow-xl border-secondary">
            <h3 className="text-2xl border-b-2 border-b-gray-400 inline-block mb-2">
              The Main Goal and Aim
            </h3>
            <p>
              At <strong className="text-xl italic">Machaven</strong>, our goal
              is to redefine how people access premium Apple technology. We aim
              to become the most trusted and customer-focused destination for
              MacBooks, delivering unmatched quality, affordability, and expert
              guidance. Our vision is to empower students, professionals, and
              businesses by providing them with the tools they need to excel. By
              prioritizing innovation, exceptional service, and customer
              satisfaction, we strive to make cutting-edge technology accessible
              and impactful for everyone
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
