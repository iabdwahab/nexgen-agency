import StartProjectButton from "../global/StartProjectButton";

function PrimaryBlock() {
  return (
    <div className="bg-dark-10 flex flex-col gap-10 rounded-xl p-6 lg:p-10">
      <div className="flex flex-col flex-wrap gap-4 lg:flex-row lg:items-start">
        <h1 className="text-orange-95 flex flex-col text-3xl font-semibold uppercase md:text-5xl lg:gap-4 lg:text-[55px]">
          <span>digital solutions</span>
          <span>that drive success</span>
        </h1>
        <StartProjectButton />
      </div>
      <p>At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.</p>
    </div>
  );
}
export default PrimaryBlock;
