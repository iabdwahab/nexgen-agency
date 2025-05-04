import NavbarItem from "../components/header/NavbarItem";

export const navbarLinks = [
  { title: "home", link: "/" },
  { title: "services", link: "/services" },
  { title: "projects", link: "/projects" },
  { title: "about", link: "/about" },
  { title: "careers", link: "/careers" },
  { title: "blogs", link: "/blogs" },
  { title: "contact us", link: "/contact-us" },
];

export const navbarLinksElements = navbarLinks.map((item, index) => <NavbarItem key={index} {...item} />);
