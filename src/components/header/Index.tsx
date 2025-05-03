import Logo from '../global/Logo';
import MenuButton from './MenuButton';

function Header() {
  return (
    <header>
      <div className="container mt-5">
        <div className="bg-dark-10 flex items-center justify-between p-3.5 md:p-5 rounded-[10px]">
          <a href="#">
            <Logo />
          </a>
          <MenuButton />
        </div>
      </div>
    </header>
  );
}
export default Header;
