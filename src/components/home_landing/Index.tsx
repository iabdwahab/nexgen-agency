import PrimaryBlock from "./PrimaryBlock";
import StatsBlock from "./StatsBlock";

function HomeLanding() {
  return (
    <main className="my-4">
      <div className="container grid gap-4">
        <PrimaryBlock />
        <StatsBlock />
      </div>
    </main>
  );
}
export default HomeLanding;
