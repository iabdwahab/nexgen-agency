import { navbarLinksElements } from "../../data/Navbar";

function Navbar() {
  return (
    <nav className="font-roboto-mono text-grey-50 bg-dark-10 absolute top-[calc(100%+15px)] left-0 w-full rounded-[10px] px-3 py-6 font-medium uppercase lg:relative lg:w-fit lg:px-0 lg:py-0">
      <ul className="[&_li:last-child_a]:bg-orange-60 [&_li:last-child_a]:text-dark-06 flex flex-col gap-2 lg:flex-row">{navbarLinksElements}</ul>
    </nav>
  );
}
export default Navbar;
