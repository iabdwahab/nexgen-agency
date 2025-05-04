import LearnMoreLink from "./LearnMoreLink";

function ReasonCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="bg-dark-10 flex flex-col gap-6 rounded-xl p-6 lg:p-8">
      <h3 className="text-orange-95 text-xl font-medium uppercase">{title}</h3>
      <p className="bac line-clamp-3 backdrop-blur-3xl">{description}</p>
      <LearnMoreLink link={link} />
    </div>
  );
}
export default ReasonCard;
