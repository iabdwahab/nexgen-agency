import SectionHeading from "../global/SectionHeading";
import ServiceCard from "./ServiceCard";

function OurServices() {
  return (
    <section>
      <div className="container">
        <div className="section-container">
          <SectionHeading>Our Services</SectionHeading>
          <div className="mt-2 grid gap-2 md:grid-cols-2">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
}
export default OurServices;
