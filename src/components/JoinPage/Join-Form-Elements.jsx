
export const TextNameInput = ({ title, name, className, type = 'text' }) => {
  return (
    <div className={`sm:col-span-3 ${className}`}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
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
  );
};



export const FormEndPart = () => {
  return (
    <div className="mt-6 flex items-center justify-center gap-x-6">
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
      <button
        type="button"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Cancel
      </button>
    </div>
  );
};

export const UploadImage = ({ title, setDocument }) => {
  return (
    <>
      <div className="sm:col-span-3">
        <label
          htmlFor="photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {title}
        </label>
        <input
          type="file"
          className="block w-full rounded-md max-w-xs border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          name="photo"
          accept="image/*"
          onChange={(e) => setDocument(e.target.files[0])}
        />
      </div>
    </>
  );
};

// export const RadioInput = () => {
//   return (
//     <div className="sm:col-span-end">
//       <fieldset>
//         <label
//           htmlFor="refer"
//           className="block text-sm font-medium leading-6 text-gray-900"
//         >
//           Org Relation
//         </label>

//         <div className="flex gap-4">
//           <div className="pt-4">
//             <input
//               id="draft"
//               className="peer/draft"
//               type="radio"
//               name="status"
//               defaultChecked
//             />
//             <label htmlFor="draft" className="peer-checked/draft:text-sky-500">
//               Yes
//             </label>
//           </div>
//           <div className="pt-4">
//             <input
//               id="published"
//               className="peer/published"
//               type="radio"
//               name="status"
//             />
//             <label
//               htmlFor="published"
//               className="peer-checked/published:text-sky-500"
//             >
//               No
//             </label>
//           </div>
//         </div>
//       </fieldset>
//     </div>
//   );
// };

<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-4 h-4 opacity-70"
  >
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd"
    />
  </svg>
</label>;
