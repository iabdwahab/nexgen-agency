import { workCardDetailsInterface } from "../../types/ourWorks";
import BookCallButton from "../global/BookCallButton";
import WorkCardTeam from "./WorkCardTeam";
import WorkCardTechnologies from "./WorkCardTechnologies";

function DetailsBlock({ data }: { data: workCardDetailsInterface }) {
  const { technologies, teamImages } = data;

  return (
    <div className="hidden flex-col gap-2 rounded-[10px] lg:order-3 lg:flex">
      <WorkCardTechnologies data={technologies} />
      <WorkCardTeam data={teamImages} />
      <BookCallButton />
    </div>
  );
}
export default DetailsBlock;
