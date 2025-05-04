import menuIcon from "/icons/menu-icon.svg";

function MenuButton({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  function handleNavToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <button onClick={handleNavToggle} className="bg-dark-06 rounded-[10px] p-2.5 lg:hidden">
      <img src={menuIcon} alt="Menu Icon" className="h-6 w-6" />
    </button>
  );
}
export default MenuButton;
