import menuIcon from '/icons/menu-icon.svg';

function MenuButton() {
  return (
    <button className="p-2.5 bg-dark-06 rounded-[10px] lg:hidden">
      <img src={menuIcon} alt="Menu Icon" className="w-6 h-6" />
    </button>
  );
}
export default MenuButton;
