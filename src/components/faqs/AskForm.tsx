function AskForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="bg-dark-10 flex flex-col rounded-xl p-7">
      <h3 className="text-orange-95 text-lg uppercase lg:text-xl">ask your question</h3>

      <hr className="bg-dark-15 my-4 h-[1px] border-none" />

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="form__label">
            name
          </label>
          <input type="text" name="name" id="name" placeholder="Enter your name" className="form__input" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="form__label">
            email
          </label>
          <input type="email" name="email" id="email" placeholder="Enter your email" className="form__input" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="question" className="form__label">
            your question
          </label>
          <textarea name="question" id="question" placeholder="Enter Your Question Here..." className="form__input h-full" />
        </div>

        <button className="bg-orange-60 text-dark-06 rounded-lg px-5 py-3.5 font-medium uppercase">send your question</button>
      </form>
    </div>
  );
}
export default AskForm;
