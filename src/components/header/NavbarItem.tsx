function NavbarItem({ title, link }: { title: string; link: string }) {
  return (
    <li>
      <a href={link} className="p-3 rounded-[10px] w-full flex justify-center bg-dark-06 hover:opacity-85 focus:opacity-85 active:opacity-75">
        {title}
      </a>
    </li>
  );
}
export default NavbarItem;
