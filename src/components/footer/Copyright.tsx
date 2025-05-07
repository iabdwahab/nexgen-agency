import { Link } from "react-router-dom";

function Copyright() {
  return (
    <div className="bg-dark-10 font-roboto-mono text-grey-70 flex flex-col flex-wrap gap-4 rounded-xl p-8 text-center text-sm lg:flex-row lg:items-center lg:justify-between lg:text-left">
      <h6 className="mx-auto">© 2024 NexGen. All rights reserved.</h6>
      <div className="flex w-full flex-col gap-2 lg:mx-auto lg:w-fit lg:flex-row lg:items-center">
        <Link to="#">Terms & Conditions</Link>
        <span className="block h-[1px] w-full bg-[#232329] lg:h-8 lg:w-[1px]"></span>
        <Link to="#">Privacy Policy</Link>
      </div>
    </div>
  );
}
export default Copyright;
