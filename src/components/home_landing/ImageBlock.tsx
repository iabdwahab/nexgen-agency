import image from "/websites/home-landing.png";

function ImageBlock() {
  return (
    <div className="grid-row-[1fr_auto] hidden overflow-hidden rounded-xl lg:grid">
      <div>
        <img src={image} alt="Image" className="h-full w-full bg-cover" />
      </div>
      <div className="bg-dark-10 p-6">
        <h4 className="text-orange-95 text-2xl font-medium uppercase">estatein real estate</h4>
        <p className="text-grey-70 text-lg capitalize">web development.</p>
      </div>
    </div>
  );
}
export default ImageBlock;
