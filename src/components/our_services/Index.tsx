import { homeOurServicesElements } from "../../data/HomeOurServices";
import SectionHeading from "../global/SectionHeading";

function OurServices() {
  return (
    <section className="mt-section-margin">
      <div className="container">
        <div className="section-container">
          <SectionHeading>Our Services</SectionHeading>
          <div className="mt-2 grid gap-2 md:grid-cols-2">{homeOurServicesElements}</div>
        </div>
      </div>
    </section>
  );
}
export default OurServices;
