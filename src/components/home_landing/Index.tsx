import ImageBlock from "./ImageBlock";
import PrimaryBlock from "./PrimaryBlock";
import StatsBlock from "./StatsBlock";

function HomeLanding() {
  return (
    <main className="my-4">
      <div className="container grid gap-4">
        <div className="grid-cols-[2fr_1fr] grid-rows-1 gap-4 lg:grid">
          <PrimaryBlock />
          <ImageBlock />
        </div>
        <StatsBlock />
      </div>
    </main>
  );
}
export default HomeLanding;
