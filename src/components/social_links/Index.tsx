import SocialLinksDesktop from "./SocialLinksDesktop";
import SocialLinksMobile from "./SocialLinksMobile";

function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      <SocialLinksDesktop />
      <SocialLinksMobile />
    </div>
  );
}
export default SocialLinks;
