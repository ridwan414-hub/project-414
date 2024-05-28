export const ContactNameInput = ({ name, title, type = "text" }) => {
  return (
    <div className="w-full flex justify-between gap-7">
      <div className={`w-full`}>
        <label
          htmlFor={name}
          className="block text-sm leading-6 text-gray-600 font-bold"
        >
          {title}
        </label>
        <div className="mt-2">
          <input
            type={type}
            name={name}
            autoComplete={name}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};
