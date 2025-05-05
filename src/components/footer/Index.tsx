import SocialLinksDesktop from "./SocialLinksDesktop";
import SocialLinksMobile from "./SocialLinksMobile";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <SocialLinksDesktop />
          <SocialLinksMobile />
          <div></div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
