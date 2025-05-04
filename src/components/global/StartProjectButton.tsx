import rightArrowIcon from "/icons/right-arrow.svg";

function StartProjectButton() {
  return (
    <button className="flex items-center">
      <span className="border-orange-60 block rounded-full border border-r-transparent p-2">
        <span className="bg-orange-60 flex rounded-full p-2.5">
          <img src={rightArrowIcon} alt="Right Arrow Icon" className="h-5 w-5" />
        </span>
      </span>
      <span className="text-orange-60 text-xl font-medium uppercase">start a project</span>
    </button>
  );
}
export default StartProjectButton;
