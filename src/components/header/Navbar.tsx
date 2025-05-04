import { navbarLinksElements } from '../../data/Navbar';

function Navbar() {
  return (
    <nav className="font-medium font-roboto-mono uppercase text-grey-50 absolute lg:relative bg-dark-10 left-0 top-[calc(100%+15px)] w-full lg:w-fit rounded-[10px] px-3 py-6 lg:px-0 lg:py-0">
      <ul className="flex flex-col lg:flex-row gap-2">{navbarLinksElements}</ul>
    </nav>
  );
}
export default Navbar;
