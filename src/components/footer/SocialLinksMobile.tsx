import { socialLinksMobileElements } from "../../data/SocialLinks";

function SocialLinksMobile() {
  return <div className="my-4 grid grid-cols-4 gap-2.5 lg:hidden">{socialLinksMobileElements}</div>;
}
export default SocialLinksMobile;
