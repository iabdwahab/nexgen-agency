import { SocialLinkInterface } from "../../types/socialLinks";
import IconCard from "../global/IconCard";
import IconTextLink from "../global/IconTextLink";

function SocialLinkDesktopCard({ data }: { data: SocialLinkInterface }) {
  const { icon, link, title, description } = data;

  return (
    <div className="bg-dark-12 rounded-xl p-8">
      <div className="flex items-center justify-between">
        <IconCard icon={icon} />
        <IconTextLink link={link} />
      </div>

      <div className="mt-10">
        <h4 className="text-orange-95 text-2xl font-medium uppercase">{title}</h4>
        <p className="text-grey-70 mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
}
export default SocialLinkDesktopCard;
