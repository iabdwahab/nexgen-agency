import SectionHeading from "../global/SectionHeading";
import Accordion from "./Accordion";

function FAQs() {
  return (
    <section className="mt-section-margin">
      <div className="container">
        <div className="section-container">
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <div className="mt-2">
            <div className="grid gap-2">
              <Accordion />
              <Accordion />
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FAQs;
