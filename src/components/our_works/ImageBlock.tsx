import { workCardImageInterface } from "../../types/ourWorks";

function ImageBlock({ image }: { image: workCardImageInterface }) {
  return (
    <div className="overflow-hidden rounded-[10px_10px_0_0] md:rounded-[10px_0_0_10px] lg:order-2 lg:rounded-[10px]">
      <picture>
        <source media="(min-width:1024px)" srcSet={image.large} />
        <img src={image.small} alt="Image" className="h-full w-full object-cover" />
      </picture>
    </div>
  );
}
export default ImageBlock;
