import { testimonialsElements } from "../../data/Testimonials";
import SectionHeading from "../global/SectionHeading";

function Testimonials() {
  return (
    <section className="mt-section-margin">
      <div className="container">
        <div className="section-container">
          <SectionHeading>testimonials</SectionHeading>
          <div className="mt-2 grid gap-2 md:grid-cols-2 lg:grid-cols-3">{testimonialsElements}</div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
