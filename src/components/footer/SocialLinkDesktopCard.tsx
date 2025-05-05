import IconCard from "../global/IconCard";
import IconTextLink from "../global/IconTextLink";
import instagramIcon from "/icons/instagram.svg";

function SocialLinkDesktopCard() {
  return (
    <div className="bg-dark-12 rounded-xl p-8">
      <div className="flex items-center justify-between">
        <IconCard icon={instagramIcon} />
        <IconTextLink />
      </div>

      <div className="mt-10">
        <h4 className="text-orange-95 text-2xl font-medium uppercase">instagram</h4>
        <p className="text-grey-70 mt-2 text-sm">Share visually appealing snippets of our latest web projects.</p>
      </div>
    </div>
  );
}
export default SocialLinkDesktopCard;
