import { SocialLinkInterface } from "../types/socialLinks";

import instagramIcon from "/icons/instagram.svg";
import twitterIcon from "/icons/twitter.svg";
import dribbbleIcon from "/icons/dribbble.svg";
import behanceIcon from "/icons/behance.svg";
import SocialLinkMobileCard from "../components/social_links/SocialLinkMobileCard";
import SocialLinkDesktopCard from "../components/social_links/SocialLinkDesktopCard";

export const socialLinksList: SocialLinkInterface[] = [
  {
    link: "#",
    icon: instagramIcon,
    title: "instagram",
    description: "Share visually appealing snippets of our projects.",
  },
  {
    link: "#",
    icon: twitterIcon,
    title: "Twitter",
    description: "Tweet about interesting coding challenges",
  },
  {
    link: "#",
    icon: dribbbleIcon,
    title: "dribbble",
    description: "Showcase design elements of our web projects.",
  },
  {
    link: "#",
    icon: behanceIcon,
    title: "behance",
    description: "Create detailed presentations for our projects.",
  },
];

export const socialLinksMobileElements = socialLinksList.map((item, index) => <SocialLinkMobileCard key={index} data={item} />);
export const socialLinksDesktopElements = socialLinksList.map((item, index) => <SocialLinkDesktopCard key={index} data={item} />);
