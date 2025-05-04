import { statsElements } from "../../data/HomeStats";

function StatsBlock() {
  return <div className="border-dark-10 grid grid-cols-2 gap-2.5 rounded-2xl border p-2.5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">{statsElements}</div>;
}
export default StatsBlock;
