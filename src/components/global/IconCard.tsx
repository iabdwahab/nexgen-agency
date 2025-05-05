function IconCard({ icon, className }: { icon: string; className?: string }) {
  return (
    <div className={`${className} bg-dark-12 border-dark-20 flex items-center justify-center rounded-xl border p-3.5`}>
      <img src={icon} alt="Icon" className="h-6 w-6" />
    </div>
  );
}
export default IconCard;
