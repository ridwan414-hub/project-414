import { useState } from "react";
import {
  FormEndPart,
  RadioInput,
  SelectInput,
  TextNameInput,
  UploadImage,
} from "./Join-Form-Elements";
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
    <section className="flex justify-center">
      <form className="w-full p-12 max-w-7xl">
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
              <UploadImage
                title=" Your photo"
                document={photo}
                setDocument={setPhoto}
              />

              <TextNameInput
                title=" Refer"
                name="refer"
              />

              <RadioInput />
              <SelectInput
                title="Payment Gateway"
                name="payment-gateway"
                options={paymentOptions}
              />

              <UploadImage
                title="Payment Doc"
                document={document}
                setDocument={setDocument}
              />
            </div>
          </div>
        </div>
        <FormEndPart />
      </form>
    </section>
  );
};

export default JoinSection;
