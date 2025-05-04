import menuIcon from "/icons/menu-icon.svg";

function MenuButton() {
  return (
    <button className="bg-dark-06 rounded-[10px] p-2.5 lg:hidden">
      <img src={menuIcon} alt="Menu Icon" className="h-6 w-6" />
    </button>
  );
}
export default MenuButton;
