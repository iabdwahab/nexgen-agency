import IconCard from "../global/IconCard";
import imageSmall from "/our_works/zenith-fitness-app-small.png";
import imageLarge from "/our_works/zenith-fitness-app-large.png";
import icon from "/icons/zenith-fitness-app-icon.svg";
import Badge from "./Badge";
import IconTextLink from "../global/IconTextLink";
import WorkCardTechnologies from "./WorkCardTechnologies";
import WorkCardTeam from "./WorkCardTeam";
import BookCallButton from "../global/BookCallButton";

function WorkCard() {
  return (
    <div className="section-container grid flex-col-reverse md:grid-cols-2 lg:grid-cols-3 lg:gap-2">
      <div className="hidden flex-col gap-2 rounded-[10px] lg:order-3 lg:flex">
        <WorkCardTechnologies />
        <WorkCardTeam />
        <BookCallButton />
      </div>

      <div className="overflow-hidden rounded-[10px_10px_0_0] md:rounded-[10px_0_0_10px] lg:order-2 lg:rounded-[10px]">
        <picture>
          <source media="(min-width:1024px)" srcSet={imageLarge} />
          <img src={imageSmall} alt="Image" className="h-full w-full object-cover" />
        </picture>
      </div>

      <div className="bg-dark-10 max-md:round flex flex-col gap-5 rounded-[0_0_10px_10px] p-6 md:rounded-[0_10px_10px_0] lg:order-1 lg:rounded-[10px]">
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
