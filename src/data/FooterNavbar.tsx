import NavbarColumn from "../components/footer/NavbarColumn";
import { footerNavbarColumnInterface } from "../types/footerNavbar";

export const footerNavbarList: footerNavbarColumnInterface[] = [
  {
    title: "home",
    links: [
      { name: "Why Us", url: "#" },
      { name: "About Us", url: "#" },
      { name: "Testimonials", url: "#" },
      { name: "FAQ's", url: "#" },
    ],
  },
  {
    title: "services",
    links: [
      { name: "Web Development", url: "#" },
      { name: "App Development", url: "#" },
      { name: "Web Design", url: "#" },
      { name: "Digital Marketing", url: "#" },
    ],
  },
  {
    title: "projects",
    links: [
      { name: "Klothink", url: "#" },
      { name: "Zenith", url: "#" },
      { name: "Novus", url: "#" },
      { name: "Apex", url: "#" },
    ],
  },
  {
    title: "blogs",
    links: [
      { name: "Business", url: "#" },
      { name: "Design", url: "#" },
      { name: "Development", url: "#" },
    ],
  },
];

export const footerNavbarElements = footerNavbarList.map((column, index) => <NavbarColumn key={index} data={column} />);
