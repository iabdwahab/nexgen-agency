import { Link } from "react-router-dom";
import IconCard from "../global/IconCard";

import instagramIcon from "/icons/instagram.svg";
import twtitterIcon from "/icons/twitter.svg";
import dribbbleIcon from "/icons/dribbble.svg";
import behanceIcon from "/icons/behance.svg";

function SocialLinksMobile() {
  return (
    <div className="my-4 grid grid-cols-4 gap-2.5">
      <Link to="#">
        <IconCard icon={instagramIcon} />
      </Link>
      <Link to="#">
        <IconCard icon={twtitterIcon} />
      </Link>
      <Link to="#">
        <IconCard icon={dribbbleIcon} />
      </Link>
      <Link to="#">
        <IconCard icon={behanceIcon} />
      </Link>
    </div>
  );
}
export default SocialLinksMobile;
