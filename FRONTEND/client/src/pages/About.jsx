import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets.js";

function About() {
  return (
    <div>
      <div className="pt-8">
        <div className="text-4xl text-center">
          <Title text1={"About"} text2={"Us"} />
        </div>

        <div className="my-10 flex flex-col lg:flex-row gap-8">
          <img
            src={assets.aboutUs_image}
            alt="about-us_image"
            className="rounded-lg shadow-lg w-full lg:max-w-[450px] object-cover"
          />

          <div className="flex flex-col justify-center gap-6 lg:w-2/4 text-gray-400 text-lg">
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
        <div className="text-3xl mt-20 ml-4">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>

        <div className="text-lg flex flex-col">
          <div className="border-2 m-3 p-3 rounded-xl shadow-lg border-secondary">
            <h3 className="text-2xl border-b-2 border-b-gray-500 inline-block mb-2 text-yellow-600">
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

          <div className="border-2 m-3 p-3 rounded-xl shadow-lg border-secondary">
            <h3 className="text-2xl border-b-2 border-b-gray-500 inline-block mb-2 text-yellow-600">
              Customer Satisfaction
            </h3>
            <p>
              At <strong className="text-xl italic">Machaven</strong>, your
              satisfaction is our highest priority. We understand that
              purchasing a MacBook is a significant investment, and we are
              committed to making the process as seamless and enjoyable as
              possible. From offering the latest models at competitive prices to
              providing expert guidance throughout your buying journey, we
              ensure that every customer receives personalized attention and
              care. We believe that a happy customer is our best advertisement,
              and we go above and beyond to ensure that you leave satisfied.
              When you choose Machaven, you’re not just buying a MacBook; you’re
              joining a community committed to supporting your needs long after
              the sale
            </p>
          </div>

          <div className="border-2 m-3 p-3 rounded-xl shadow-lg border-secondary">
            <h3 className="text-2xl border-b-2 border-b-gray-500 inline-block mb-2 text-yellow-600">
              The Brand That Cares For You
            </h3>
            <p>
              At <strong className="text-xl italic">Machaven</strong>, we’re not
              just a store; we’re a brand that truly cares about your needs. We
              understand that when it comes to technology, it’s not just about
              the product – it’s about your experience, your satisfaction, and
              your peace of mind. Whether you’re a student, professional, or
              creative, Machaven is dedicated to providing you with a
              hassle-free, enjoyable experience. We take pride in delivering not
              just exceptional products, but also personalized service that
              ensures you feel heard, valued, and supported long after your
              purchase
            </p>
          </div>

          <div className="border-2 m-3 p-3 rounded-xl shadow-lg border-secondary">
            <h3 className="text-2xl border-b-2 border-b-gray-500 inline-block mb-2 text-yellow-600">
              Dedicated Service Center
            </h3>
            <p>
              At <strong className="text-xl italic">Machaven</strong>, we’re
              proud to offer a Dedicated Service Center designed to provide the
              best after-sales support for your MacBook. Our expert technicians
              are committed to ensuring your device continues to perform at its
              best long after your purchase. Whether it’s troubleshooting,
              repairs, or maintenance, we provide fast and reliable solutions
              tailored to your needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
