import { Link } from "react-router-dom";
import image from "/people/wade-warren.png";
import rightArrow from "/icons/right-arrow-orange.svg";

function TestimonialCard() {
  return (
    <div className="overflow-hidden rounded-[10px]">
      <div className="bg-dark-10 p-5">
        <h3 className="text-orange-95 text-lg font-medium lg:text-2xl">NexGen turned our business around!</h3>
        <p className="text-grey-70 mt-4 text-sm">Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</p>
      </div>

      <div className="bg-dark-12 grid grid-cols-[auto_1fr_auto] items-center gap-2 px-5 py-4">
        <img src={image} alt="Image" />
        <div className="capitalize">
          <h4 className="text-orange-90 text-base font-medium">wade warren</h4>
          <h5 className="text-grey-50">art director</h5>
        </div>
        <Link to="#" className="border-dark-20 bg-dark-12 flex rounded-full border p-2.5">
          <img src={rightArrow} alt="Icon" className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
export default TestimonialCard;
