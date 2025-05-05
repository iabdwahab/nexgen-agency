import IconCard from "../global/IconCard";
import IconTextLink from "../global/IconTextLink";
import { homeOurServiceInterface } from "../../types/ourServices";
import BookCallButton from "../global/BookCallButton";

function ServiceCard({ title, description, startPrice, icon, link }: homeOurServiceInterface) {
  return (
    <div className="bg-dark-10 flex flex-col gap-5 rounded-xl p-6 lg:gap-10 lg:p-10">
      <div className="flex items-center justify-between">
        <div className="text-orange-95 flex items-center gap-3.5 text-xl font-medium lg:text-[22px]">
          <IconCard icon={icon} />
          <h3 className="uppercase">{title}</h3>
        </div>
        <IconTextLink text="book a call" className="hidden lg:flex" />
      </div>

      <div className="flex flex-col gap-5 lg:flex-col-reverse">
        <h4 className="text-orange-95 text-lg font-medium lg:text-end lg:text-[22px]">Starts From ${startPrice.toLocaleString()}</h4>
        <p>{description}</p>
      </div>

      <BookCallButton link={link} className="lg:hidden" />
    </div>
  );
}
export default ServiceCard;
