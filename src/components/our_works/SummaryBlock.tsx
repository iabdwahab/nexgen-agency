import { workCardSummaryInterface } from "../../types/ourWorks";
import IconCard from "../global/IconCard";
import IconTextLink from "../global/IconTextLink";
import Badge from "./Badge";
import icon from "/icons/zenith-fitness-app-icon.svg";

function SummaryBlock({ data }: { data: workCardSummaryInterface }) {
  const { title, description, link, badges } = data;

  return (
    <div className="bg-dark-10 max-md:round flex flex-col gap-5 rounded-[0_0_10px_10px] p-6 md:rounded-[0_10px_10px_0] lg:order-1 lg:rounded-[10px]">
      <div className="flex items-center gap-2">
        <IconCard icon={icon} />
        <h3 className="text-orange-95 text-base font-medium uppercase">{title}</h3>
      </div>

      <div className="flex flex-col gap-2">
        {badges.map((badge, index) => (
          <Badge key={index} title={badge.title} value={badge.value} />
        ))}
      </div>

      <p>{description}</p>

      <IconTextLink text="details" link={link} className="justify-start" />
    </div>
  );
}
export default SummaryBlock;
