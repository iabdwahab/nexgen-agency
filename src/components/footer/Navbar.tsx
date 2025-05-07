import { footerNavbarElements } from "../../data/FooterNavbar";

function Navbar({ className }: { className?: string }) {
  return (
    <div className={`${className} bg-dark-10 rounded-xl p-8`}>
      <nav className="grid grid-cols-2 justify-between gap-10 md:flex">{footerNavbarElements}</nav>
    </div>
  );
}
export default Navbar;
