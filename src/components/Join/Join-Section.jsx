import { useState } from "react";
import { TextNameInput } from "./Join-Form-Elements";
const JoinSection = () => {
  const [photo, setPhoto] = useState(null);
  const [document, setDocument] = useState(null);
  return (
    <form className="p-12">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <TextNameInput
              title="First Name"
              name="first-name"
            />
            <TextNameInput
              title="Last Name"
              name="last-name"
            />
            <TextNameInput
              title="Mobile No(BD)"
              name="mobile-no-bd"
            />
            <TextNameInput
              title=" Father's name"
              name="father's-name"
            />
            <TextNameInput
              title=" Mother's name"
              name="mother's-name"
            />
            <TextNameInput
              title="NID or Passport"
              name="nid-or-passport"
            />

            <div className="sm:col-span-2">
              <label
                htmlFor="upazilla"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Upazilla
              </label>
              <div className="mt-2">
                <select
                  id="upazilla"
                  name="upazilla"
                  autoComplete="upazilla"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Upazilla 1</option>
                  <option>Upazilla 2</option>
                  <option>Upazilla 3</option>
                  <option>Upazilla 4</option>
                  <option>Upazilla 5</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="Union"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Union
              </label>
              <div className="mt-2">
                <select
                  id="Union"
                  name="Union"
                  autoComplete="Union"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Union 1</option>
                  <option>Union 2</option>
                  <option>Union 3</option>
                  <option>Union 4</option>
                  <option>Union 5</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="permanent-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Permanent address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="permanent-address"
                  id="permanent-address"
                  autoComplete="permanent-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="ksa-state"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Ksa State
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="ksa-state"
                  id="ksa-state"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="present-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Present Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="present-address"
                  id="present-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="date-of-birth"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date Of Birth
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="date-of-birth"
                  id="date-of-birth"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="occupation"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Occupation
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="occupation"
                  id="occupation"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="marital-status"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Marital Status
              </label>
              <div className="mt-2">
                <select
                  id="marital-status"
                  name="marital-status"
                  autoComplete="marital-status"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Married</option>
                  <option>Unmarried</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="blood-group"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Blood Group
              </label>
              <div className="mt-2">
                <select
                  id="blood-group"
                  name="blood-group"
                  autoComplete="blood-group"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Your photo
              </label>
              <input
                type="file"
                className="block w-full rounded-md max-w-xs border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="photo"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </div>
            <div className="sm:col-span-3">
              {photo && (
                <div className="avatar">
                  <div className="w-32 rounded">
                    <img src={URL.createObjectURL(photo)} />
                  </div>
                </div>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="refer"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Refer
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="refer"
                  id="refer"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-end">
              <fieldset>
                <label
                  htmlFor="refer"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Org Relation
                </label>

                <div className="flex gap-4">
                  <div className="pt-4">
                    <input
                      id="draft"
                      className="peer/draft"
                      type="radio"
                      name="status"
                      defaultChecked
                    />
                    <label
                      htmlFor="draft"
                      className="peer-checked/draft:text-sky-500"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="pt-4">
                    <input
                      id="published"
                      className="peer/published"
                      type="radio"
                      name="status"
                    />
                    <label
                      htmlFor="published"
                      className="peer-checked/published:text-sky-500"
                    >
                      No
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="payment-gateway"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Payment Gateway
              </label>
              <div className="mt-2">
                <select
                  id="payment-gateway"
                  name="payment-gateway"
                  autoComplete="payment-gateway"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Bkash</option>
                  <option>Rocket</option>
                  <option>Nagad</option>
                  <option>Paypal</option>
                  <option>Bank</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Payment Document
              </label>
              <input
                type="file"
                className="block w-full rounded-md max-w-xs border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="photo"
                accept="image/*"
                onChange={(e) => setDocument(e.target.files[0])}
              />
            </div>
            <div className="sm:col-span-3">
              {document && (
                <div className="avatar">
                  <div className="w-32 rounded">
                    <img src={URL.createObjectURL(document)} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
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
    </form>
  );
};

export default JoinSection;
