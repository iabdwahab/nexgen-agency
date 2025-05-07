import SocialLinks from "../social_links/Index";
import Navbar from "./Navbar";

function Footer() {
  return (
    <footer className="mt-2">
      <div className="container">
        <div className="grid gap-2 lg:grid-cols-[1.3fr_2fr] lg:grid-rows-2">
          <SocialLinks className="row-span-2" />
          <Navbar className="row-span-1" />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
