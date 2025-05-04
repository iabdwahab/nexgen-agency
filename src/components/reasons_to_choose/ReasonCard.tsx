import LearnMoreLink from "./LearnMoreLink";

function ReasonCard() {
  return (
    <div className="bg-dark-10 flex flex-col gap-6 rounded-xl p-6 lg:p-8">
      <h3 className="text-orange-95 text-xl font-medium uppercase">expertise in cutting-edge technologies</h3>
      <p>NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing...</p>
      <LearnMoreLink />
    </div>
  );
}
export default ReasonCard;
