import { Link } from "react-router-dom";
import topRightArrow from "/icons/top-right-arrow.svg";

function KnowMoreLink() {
  return (
    <Link to="#" className="bg-dark-10 flex items-center justify-center gap-1.5 rounded-xl p-5">
      <span className="bg-dark-06 border-dark-15 block w-fit rounded-full border p-3.5">
        <img src={topRightArrow} alt="Arrow Icon" className="h-5 w-5" />
      </span>
      <span className="font-roboto-mono text-grey-70 text-sm font-medium uppercase">know more</span>
    </Link>
  );
}
export default KnowMoreLink;
