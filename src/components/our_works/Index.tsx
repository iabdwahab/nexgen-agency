import SectionHeading from "../global/SectionHeading";
import WorkCard from "./WorkCard";

function OurWorks() {
  return (
    <section className="mt-section-margin">
      <div className="container">
        <div className="section-container">
          <SectionHeading>Our Works</SectionHeading>
          <div className="mt-4 grid gap-2">
            <WorkCard />
            <WorkCard />
          </div>
        </div>
      </div>
    </section>
  );
}
export default OurWorks;
