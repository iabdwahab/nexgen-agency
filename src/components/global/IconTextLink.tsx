import { Link } from "react-router-dom";
import topRightArrow from "/icons/top-right-arrow.svg";

function IconTextLink({ text, link = "#", className }: { text?: string; link?: string; className?: string }) {
  return (
    <Link to={link} className={`${className} flex items-center justify-center gap-2`}>
      <span className="bg-dark-12 border-dark-20 block w-fit rounded-full border p-2.5">
        <img src={topRightArrow} alt="Arrow Icon" className="h-5 w-5" />
      </span>
      {text && <span className="font-roboto-mono text-grey-70 text-sm font-medium uppercase">{text}</span>}
    </Link>
  );
}
export default IconTextLink;
