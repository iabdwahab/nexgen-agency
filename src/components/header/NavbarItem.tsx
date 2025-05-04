import { Link } from "react-router-dom";

function NavbarItem({ title, link }: { title: string; link: string }) {
  return (
    <li>
      <Link to={link} className="bg-dark-06 flex w-full justify-center rounded-[10px] px-4 py-3 hover:opacity-85 focus:opacity-85 active:opacity-75">
        {title}
      </Link>
    </li>
  );
}
export default NavbarItem;
