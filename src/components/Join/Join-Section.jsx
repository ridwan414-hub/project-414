import { useState } from "react";
import { FormEndPart, SelectInput, TextNameInput } from "./Join-Form-Elements";
const JoinSection = () => {
  const [photo, setPhoto] = useState(null);
  const [document, setDocument] = useState(null);
  const maritalOptions = ["Married", "Unmarried"];
  const bloodOptions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const upazillaOptions = [
    "Upazilla 1",
    "Upazilla 2",
    "Upazilla 3",
    "Upazilla 4",
    "Upazilla 5",
  ];
  const unionOptions = ["Union 1", "Union 2", "Union 3", "Union 4", "Union 5"];
  const paymentOptions = ["Bkash", "Rocket", "Nagad", "Paypal", "Bank"];
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

            <SelectInput
              title="Upazilla"
              name="upazilla"
              options={upazillaOptions}
            />
            <SelectInput
              title="Union"
              name="union"
              options={unionOptions}
            />

            <TextNameInput
              name="permanent-address"
              title="Permanent address"
              className="sm:col-span-full"
            />
            <TextNameInput
              title="Ksa State"
              name="ksa-state"
            />
            <TextNameInput
              title="Present Address"
              name="present-address"
            />
            <TextNameInput
              title="Email"
              name="email"
              type="email"
            />
            <TextNameInput
              title="Password"
              name="password"
              type="password"
            />
            <TextNameInput
              title="Date Of Birth"
              name="date-of-birth"
              type="date"
            />
            <TextNameInput
              title="Occupation"
              name="occupation"
            />
            <SelectInput
              title="Marital Status"
              name="marital-status"
              options={maritalOptions}
            />
            <SelectInput
              title="Blood Group"
              name="blood-group"
              options={bloodOptions}
            />

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
            <SelectInput
              title="Payment Gateway"
              name="payment-gateway"
              options={paymentOptions}
            />

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
      <FormEndPart />
    </form>
  );
};

export default JoinSection;
