import { Link } from "react-router-dom";
import IconCard from "../global/IconCard";
import icon from "/icons/web-dev-icon.svg";
import IconTextLink from "../global/IconTextLink";

function ServiceCard() {
  return (
    <div className="bg-dark-10 flex flex-col gap-5 rounded-xl p-6 lg:gap-10 lg:p-10">
      <div className="flex items-center justify-between">
        <div className="text-orange-95 flex items-center gap-3.5 text-xl font-medium lg:text-[22px]">
          <IconCard icon={icon} />
          <h3>Web Design</h3>
        </div>
        <IconTextLink text="book a call" className="hidden lg:flex" />
      </div>
      <div className="flex flex-col gap-5 lg:flex-col-reverse">
        <h4 className="text-orange-95 text-lg font-medium lg:text-end lg:text-[22px]">Starts From $1,500</h4>
        <p>Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.</p>
      </div>

      <Link to="#" className="bg-orange-60 text-dark-06 flex items-center justify-center rounded-lg p-3.5 font-medium uppercase hover:opacity-85 hover:focus:opacity-85 hover:active:opacity-75 lg:hidden">
        book a call
      </Link>
    </div>
  );
}
export default ServiceCard;
