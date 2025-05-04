import { statsElements } from "../../data/HomeStats";
import KnowMoreLink from "./KnowMoreLink";

function StatsBlock() {
  return (
    <div className="border-dark-10 grid grid-cols-2 gap-2.5 rounded-2xl border p-2.5 md:grid-cols-4 xl:grid-cols-6 max-xl:[&>*:nth-last-child(-n+2)]:col-span-2">
      {statsElements}
      <KnowMoreLink />
    </div>
  );
}
export default StatsBlock;
