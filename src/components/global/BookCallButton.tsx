import { Link } from "react-router-dom";

function BookCallButton({ link = "#", className }: { link?: string; className?: string }) {
  return (
    <Link to={link} className={`${className} bg-orange-60 text-dark-06 flex items-center justify-center rounded-lg p-3.5 font-medium uppercase hover:opacity-85 hover:focus:opacity-85 hover:active:opacity-75`}>
      book a call
    </Link>
  );
}
export default BookCallButton;
