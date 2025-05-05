import { ourWorksElements } from "../../data/OurWorks";
import SectionHeading from "../global/SectionHeading";

function OurWorks() {
  return (
    <section className="mt-section-margin">
      <div className="container">
        <div className="section-container">
          <SectionHeading>Our Works</SectionHeading>
          <div className="mt-4 grid gap-2">{ourWorksElements}</div>
        </div>
      </div>
    </section>
  );
}
export default OurWorks;
