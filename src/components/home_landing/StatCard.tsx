function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-dark-10 flex flex-col items-center gap-2.5 rounded-xl px-3.5 py-4 whitespace-nowrap last:col-span-2">
      <h5 className="font-roboto-mono text-grey-70 text-sm font-medium uppercase">{title}</h5>
      <h6 className="text-orange-70 text-[40px] leading-[1] font-semibold">{value}</h6>
    </div>
  );
}
export default StatCard;
