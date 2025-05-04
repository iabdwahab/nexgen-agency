import webDesignIcon from "/icons/web-design-icon.svg";
import webDevIcon from "/icons/web-dev-icon.svg";
import mobileDevIcon from "/icons/mobile-dev-icon.svg";
import digitalMarketingIcon from "/icons/digital-marketing-icon.svg";
import { homeOurServiceInterface } from "../types/ourServices";
import ServiceCard from "../components/our_services/ServiceCard";

export const homeOurServicesList: homeOurServiceInterface[] = [
  {
    icon: webDesignIcon,
    title: "web design",
    description: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
    link: "#",
    startPrice: 1500,
  },
  {
    icon: mobileDevIcon,
    title: "mobile app development",
    description: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications .",
    link: "#",
    startPrice: 2500,
  },
  {
    icon: webDevIcon,
    title: "web development",
    description: "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
    link: "#",
    startPrice: 1800,
  },
  {
    icon: digitalMarketingIcon,
    title: "digital marketing",
    description: `In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility`,
    link: "#",
    startPrice: 1200,
  },
];

export const homeOurServicesElements = homeOurServicesList.map((service, index) => <ServiceCard key={index} {...service} />);
