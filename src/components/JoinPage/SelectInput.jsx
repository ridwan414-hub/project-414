import { useState } from "react";

export const SelectInput = ({
  title,
  name,
  className,
  options,
  data,
  setDataName,
  getAllStates,
  getAllCities,
}) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputField = (e) => {
    e.preventDefault();
    setDataName(e.target.value);
    setInputValue(e.target.value);
  };

  const filteredOptions = options?.filter((o) =>
    o.name?.toLowerCase().includes(inputValue?.toLowerCase() ?? '')
  );
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
          type="text"
          id={name}
          name={name}
          placeholder="Search"
          required
          className="input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          value={data}
          onChange={handleInputField}
        />
        {inputValue && (
          <ul className="flex-row text-xs menu menu-sm dropdown-content bg-base-200 w-full h-auto -z-10 rounded-box overflow-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, i) => (
                <li key={i} className="w-full">
                  <button
                    className="text-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setDataName(option.name);
                      setInputValue('');
                      if (name === 'country') {
                        getAllStates(option);
                      } else if (name === 'state') {
                        console.log(option);
                        getAllCities(option);
                      }
                    }}
                  >
                    {option.name}
                  </button>
                </li>
              ))
            ) : (
              <li className="w-full">
                <button className="text-center">
                  Input your &apos;non-listed&apos; {name} name then fill up
                  the rest of the fields
                </button>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};