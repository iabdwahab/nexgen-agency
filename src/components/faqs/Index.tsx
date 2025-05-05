import SectionHeading from "../global/SectionHeading";
import AskForm from "./AskForm";
import FAQsContainer from "./FAQsContainer";

function FAQs() {
  return (
    <section className="mt-section-margin">
      <div className="container">
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <div className="mt-2 grid gap-2 lg:grid-cols-[2fr_1fr]">
          <FAQsContainer />
          <AskForm />
        </div>
      </div>
    </section>
  );
}
export default FAQs;
