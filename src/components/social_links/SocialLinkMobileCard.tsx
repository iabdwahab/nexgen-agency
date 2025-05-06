import { Link } from "react-router-dom";
import IconCard from "../global/IconCard";
import { SocialLinkInterface } from "../../types/socialLinks";

function SocialLinkMobileCard({ data }: { data: SocialLinkInterface }) {
  const { link, icon } = data;

  return (
    <Link to={link}>
      <IconCard icon={icon} />
    </Link>
  );
}
export default SocialLinkMobileCard;
