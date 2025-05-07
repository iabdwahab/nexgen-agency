function Newsletter() {
  return (
    <div className="bg-dark-10 rounded-xl p-8">
      <h3 className="text-grey-40 uppercase">newsletter</h3>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h4 className="text-orange-95 text-lg font-medium uppercase lg:text-2xl">Subscribe To our Newsletter</h4>

        <div className="flex items-center gap-4">
          <input type="email" placeholder="Enter your email" className="w-full border-b p-2" />
          <span className="bg-dark-12 border-dark-20 block w-fit rounded-full border p-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-orange-80 size-6 rotate-180">
              <path fillRule="evenodd" d="M20.03 3.97a.75.75 0 0 1 0 1.06L6.31 18.75h9.44a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v9.44L18.97 3.97a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Newsletter;
