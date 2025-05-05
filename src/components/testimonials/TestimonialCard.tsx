import { Link } from "react-router-dom";
import rightArrow from "/icons/right-arrow-orange.svg";
import { testimonialInterface } from "../../types/testimonials";

function TestimonialCard({ data }: { data: testimonialInterface }) {
  const { title, testimonial, image, author, position, link } = data;

  return (
    <div className="grid grid-rows-[1fr_auto] overflow-hidden rounded-[10px] lg:first:col-span-2 lg:last:col-span-2">
      <div className="bg-dark-10 p-5">
        <h3 className="text-orange-95 text-lg font-medium lg:text-2xl">{title}</h3>
        <p className="text-grey-70 mt-4 text-sm">{testimonial}</p>
      </div>

      <div className="bg-dark-12 grid grid-cols-[auto_1fr_auto] items-center gap-2 px-5 py-4">
        <img src={image} alt="Image" className="h-10 w-10 rounded-full" />
        <div className="capitalize">
          <h4 className="text-orange-90 text-base font-medium">{author}</h4>
          <h5 className="text-grey-50 text-sm font-medium">{position}</h5>
        </div>
        <Link to={link} className="border-dark-20 bg-dark-12 flex rounded-full border p-2.5">
          <img src={rightArrow} alt="Icon" className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
export default TestimonialCard;
