import { useState } from "react";
import { faqsList } from "../../data/FAQs";
import Accordion from "./Accordion";

function FAQsContainer() {
  const [openedId, setOpenedId] = useState(0);

  function changeOpenedAccordion(id: number) {
    setOpenedId(id);
  }

  const faqsElements = faqsList.map((faq, index) => {
    return <Accordion key={index} data={faq} isOpen={faq.id === openedId} changeOpenedAccordion={changeOpenedAccordion} />;
  });

  return <div className="grid gap-2">{faqsElements}</div>;
}
export default FAQsContainer;
