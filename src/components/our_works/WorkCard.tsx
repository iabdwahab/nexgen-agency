import { workCardInterface } from "../../types/ourWorks";
import DetailsBlock from "./DetailsBlock";
import ImageBlock from "./ImageBlock";
import SummaryBlock from "./SummaryBlock";

function WorkCard({ data }: { data: workCardInterface }) {
  const { details, image, summary } = data;

  return (
    <div className="section-container grid flex-col-reverse md:grid-cols-2 lg:grid-cols-3 lg:gap-2">
      <DetailsBlock data={details} />
      <ImageBlock image={image} />
      <SummaryBlock data={summary} />
    </div>
  );
}
export default WorkCard;
