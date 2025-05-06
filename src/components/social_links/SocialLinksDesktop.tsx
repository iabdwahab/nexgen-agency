import { socialLinksDesktopElements } from "../../data/SocialLinks";

function SocialLinksDesktop() {
  return <div className="hidden grid-cols-2 gap-4 lg:grid">{socialLinksDesktopElements}</div>;
}
export default SocialLinksDesktop;
