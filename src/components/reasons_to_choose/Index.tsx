import { reasonsToChooseElements } from "../../data/ReasonsToChoose";
import SectionHeading from "../global/SectionHeading";

function ReasonsToChoose() {
  return (
    <section className="my-section-margin">
      <div className="container">
        <div className="section-container">
          <SectionHeading>Reasons to Choose NexGen for Your Digital Journey</SectionHeading>
          <div className="mt-2 grid gap-2 md:grid-cols-2 lg:grid-cols-4">{reasonsToChooseElements}</div>
        </div>
      </div>
    </section>
  );
}
export default ReasonsToChoose;
