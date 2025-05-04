function SectionHeading({ children }: { children: string }) {
  return (
    <div className="bg-dark-10 rounded-2xl p-6 lg:p-8">
      <h2 className="text-orange-95 text-2xl font-semibold uppercase lg:text-4xl">{children}</h2>
    </div>
  );
}
export default SectionHeading;
