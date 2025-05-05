function WorkCardTechnologies({ data }: { data: string[] }) {
  const technologiesElements = data.map((technology, index) => (
    <p key={index} className="text-grey-90 font-roboto-mono bg-dark-12 w-fit rounded-full px-3.5 py-2 text-sm">
      {technology}
    </p>
  ));

  return (
    <div className="bg-dark-10 rounded-[10px] p-6">
      <h3 className="text-base font-medium text-white uppercase">technologies used</h3>
      <div className="mt-4 flex flex-wrap gap-2">{technologiesElements}</div>
    </div>
  );
}
export default WorkCardTechnologies;
