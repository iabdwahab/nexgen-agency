import image from "/our_works/team-member-1.png";

function WorkCardTeam() {
  return (
    <div className="bg-dark-10 flex flex-wrap items-center justify-between gap-4 rounded-[10px] p-6">
      <h3 className="text-base font-medium text-white uppercase">team members</h3>
      <div className="mx-auto flex items-center justify-center gap-2">
        <img src={image} alt="Image" className="w-8 rounded-full" />
        <img src={image} alt="Image" className="w-8 rounded-full" />
        <img src={image} alt="Image" className="w-8 rounded-full" />
        <img src={image} alt="Image" className="w-8 rounded-full" />
        <img src={image} alt="Image" className="w-8 rounded-full" />
      </div>
    </div>
  );
}
export default WorkCardTeam;
