import { useRef } from "react";
import { faqInterface } from "../../types/faqs";

function Accordion({ data, isOpen, changeOpenedAccordion }: { data: faqInterface; isOpen: boolean; changeOpenedAccordion: (id: number) => void }) {
  const { id, question, answer } = data;
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-dark-10 h-fit rounded-xl px-7">
      <button onClick={() => changeOpenedAccordion(id)} className="flex w-full items-center justify-between gap-2 py-5">
        <h3 className="text-orange-95 text-left text-lg font-medium lg:text-[22px]">{question}</h3>
        <span className="bg-dark-12 border-dark-20 flex items-center justify-center rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${isOpen ? "rotate-45" : ""} text-orange-80 h-5 w-5 duration-350 lg:h-6 lg:w-6`}>
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          </svg>
        </span>
      </button>

      <div ref={contentRef} className={`overflow-hidden duration-350`} style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0" }}>
        <hr className={`${isOpen ? "w-full" : "w-0"} bg-dark-20 mx-auto h-[1px] border-none duration-350`} />
        <h4 className="py-4">{answer}</h4>
      </div>
    </div>
  );
}
export default Accordion;
