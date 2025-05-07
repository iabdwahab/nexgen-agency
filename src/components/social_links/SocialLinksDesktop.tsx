import { socialLinksDesktopElements } from "../../data/SocialLinks";

function SocialLinksDesktop() {
  return <div className="hidden grid-cols-2 grid-rows-2 gap-2 lg:grid">{socialLinksDesktopElements}</div>;
}
export default SocialLinksDesktop;
