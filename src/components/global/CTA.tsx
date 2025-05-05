import { Link } from "react-router-dom";
import topRightArrow from "/icons/top-right-arrow.svg";

function CTA() {
  return (
    <section className="mt-section-margin">
      <div className="container">
        <div className="bg-orange-60 flex flex-col gap-6 rounded-xl px-5 py-8 lg:p-14">
          <h2 className="text-dark-06 text-3xl font-medium">Ready to Transform Your Digital Presence?</h2>
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <p className="text-dark-15">Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.</p>
            <Link to="#" className="bg-dark-06 text-orange-90 flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 uppercase lg:ml-auto lg:w-fit">
              <span>Get in Touch</span>
              <img src={topRightArrow} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CTA;
