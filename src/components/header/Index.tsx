import Logo from '../global/Logo';
import MenuButton from './MenuButton';
import Navbar from './Navbar';

function Header() {
  return (
    <header>
      <div className="container mt-5">
        <div className="relative bg-dark-10 flex items-center justify-between p-3.5 md:p-5 rounded-[10px]">
          <a href="#">
            <Logo />
          </a>
          <MenuButton />
          <Navbar />
        </div>
      </div>
    </header>
  );
}
export default Header;
