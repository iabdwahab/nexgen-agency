import StartProjectButton from "../global/StartProjectButton";

function PrimaryBlock() {
  return (
    <div className="bg-dark-10 flex flex-col gap-4 rounded-xl p-6 lg:p-14">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-0">
        <h1 className="text-orange-95 flex flex-col gap-2 text-3xl font-semibold uppercase lg:gap-4 lg:text-6xl">
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
