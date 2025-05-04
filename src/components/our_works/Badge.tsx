import dotIcon from "/icons/dot-icon.svg";

function Badge({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-dark-12 flex w-fit items-center gap-1 rounded-full px-2.5 py-1.5 text-[12px] capitalize">
      <h4 className="">{title}</h4>
      <span>
        <img src={dotIcon} alt="Icon" className="h-1 w-1" />
      </span>
      <h5 className="text-grey-90">{value}</h5>
    </div>
  );
}
export default Badge;
