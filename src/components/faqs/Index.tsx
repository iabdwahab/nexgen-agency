import { faqsElements } from "../../data/FAQs";
import SectionHeading from "../global/SectionHeading";
import AskForm from "./AskForm";

function FAQs() {
  return (
    <section className="mt-section-margin">
      <div className="container">
        <div className="section-container">
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <div className="mt-2 grid gap-2 lg:grid-cols-[2fr_1fr]">
            <div className="grid gap-2">{faqsElements}</div>
            <AskForm />
          </div>
        </div>
      </div>
    </section>
  );
}
export default FAQs;
