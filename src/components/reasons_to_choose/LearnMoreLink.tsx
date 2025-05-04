import { Link } from "react-router-dom";
import topRightArrow from "/icons/top-right-arrow.svg";

function LearnMoreLink() {
  return (
    <Link to="#" className="flex items-center gap-2">
      <span className="bg-dark-06 border-dark-15 flex w-fit rounded-full border p-3">
        <img src={topRightArrow} alt="Icon" className="h-5 w-5" />
      </span>
      <span className="font-roboto-mono font-bold uppercase">learn more</span>
    </Link>
  );
}
export default LearnMoreLink;
