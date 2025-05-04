function IconCard({ icon }: { icon: string }) {
  return (
    <div className="bg-dark-12 border-dark-20 w-fit rounded-xl border p-3.5">
      <img src={icon} alt="Icon" className="h-6 w-6" />
    </div>
  );
}
export default IconCard;
