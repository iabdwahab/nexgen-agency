import SectionHeading from "../global/SectionHeading";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section className="mt-section-margin">
      <div className="container">
        <div className="section-container">
          <SectionHeading>testimonials</SectionHeading>
          <div className="mt-2 grid gap-2 lg:grid-cols-4">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
