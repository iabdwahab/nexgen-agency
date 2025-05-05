import SectionHeading from "../global/SectionHeading";
import Accordion from "./Accordion";
import AskForm from "./AskForm";

function FAQs() {
  return (
    <section className="mt-section-margin">
      <div className="container">
        <div className="section-container">
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <div className="mt-2 grid gap-2 lg:grid-cols-[2fr_1fr]">
            <div className="grid justify-start gap-2">
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
            </div>
            <AskForm />
          </div>
        </div>
      </div>
    </section>
  );
}
export default FAQs;
