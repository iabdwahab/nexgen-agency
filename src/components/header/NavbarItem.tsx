function NavbarItem({ title, link }: { title: string; link: string }) {
  return (
    <li>
      <a href={link} className="bg-dark-06 flex w-full justify-center rounded-[10px] p-3 hover:opacity-85 focus:opacity-85 active:opacity-75">
        {title}
      </a>
    </li>
  );
}
export default NavbarItem;
