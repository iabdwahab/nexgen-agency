import { useRef, useState } from "react";
import plusIcon from "/icons/plus-icon.svg";

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="bg-dark-10 rounded-xl px-7">
      <button onClick={toggleAccordion} className="flex w-full items-center justify-between py-5">
        <h3 className="text-orange-95 text-lg text-[22px] font-medium">How long does it take to complete a web development project?</h3>
        <span className="bg-dark-12 border-dark-20 rounded-full p-2.5">
          <img src={plusIcon} alt="Icon" className={`${isOpen ? "rotate-45" : ""} h-5 w-5 duration-350 lg:h-6 lg:w-6`} />
        </span>
      </button>

      <div ref={contentRef} className={`max-h-0 overflow-hidden duration-350`} style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0" }}>
        <hr className={`${isOpen ? "w-full" : "w-0"} bg-dark-20 mx-auto h-[1px] border-none duration-350`} />
        <h4 className="py-4">The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.</h4>
      </div>
    </div>
  );
}
export default Accordion;
