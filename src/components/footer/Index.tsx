import SocialLinks from "../social_links/Index";
import Copyright from "./Copyright";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";

function Footer() {
  return (
    <footer className="my-2">
      <div className="container">
        <div className="grid gap-2 lg:grid-cols-[1.3fr_2fr] lg:grid-rows-2">
          <SocialLinks className="grid lg:row-span-2" />

          <Navbar className="row-span-1" />

          <div className="grid gap-2 lg:col-start-2 lg:row-span-1 lg:row-start-2">
            <Newsletter />
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
