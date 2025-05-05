function WorkCardTeam({ data }: { data: string[] }) {
  const teamImagesElements = data.map((image, index) => <img key={index} src={image} alt="Image" className="w-8 rounded-full" />);

  return (
    <div className="bg-dark-10 flex flex-wrap items-center justify-between gap-4 rounded-[10px] p-6">
      <h3 className="text-base font-medium text-white uppercase">team members</h3>
      <div className="flex items-center justify-center gap-2">{teamImagesElements}</div>
    </div>
  );
}
export default WorkCardTeam;
