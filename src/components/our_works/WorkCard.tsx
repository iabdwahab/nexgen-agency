import IconCard from "../global/IconCard";
import image from "/our_works/zenith-fitness-app-small.png";
import icon from "/icons/zenith-fitness-app-icon.svg";
import Badge from "./Badge";
import IconTextLink from "../global/IconTextLink";

function WorkCard() {
  return (
    <div className="section-container">
      <div className="overflow-hidden rounded-tl-[10px] rounded-tr-[10px]">
        <img src={image} alt="Image" className="w-full" />
      </div>
      <div className="bg-dark-10 flex flex-col gap-5 rounded-br-[10px] rounded-bl-[10px] p-6">
        <div className="flex items-center gap-2">
          <IconCard icon={icon} />
          <h3 className="text-orange-95 text-base font-medium">A-Aura Ecommerce</h3>
        </div>
        <div className="flex flex-col gap-2">
          <Badge title="category" value="web design & development" />
          <Badge title="time taken" value="3 months" />
        </div>
        <p>A complete overhaul of a corporate website to enhance its brand identity and user experience.</p>
        <IconTextLink text="details" className="justify-start" />
      </div>
    </div>
  );
}
export default WorkCard;
