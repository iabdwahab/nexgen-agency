import { Link } from "react-router-dom";
import { footerNavbarColumnInterface } from "../../types/footerNavbar";

function NavbarColumn({ data }: { data: footerNavbarColumnInterface }) {
  const { title, links } = data;

  return (
    <div>
      <h4 className="font-roboto-mono text-orange-90 text-lg font-bold capitalize lg:text-[22px]">{title}</h4>
      <ul className="text-grey-50 mt-4 flex flex-col gap-1">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default NavbarColumn;
