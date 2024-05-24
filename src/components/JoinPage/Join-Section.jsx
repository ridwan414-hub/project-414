import { useEffect, useState } from 'react';
import {
  FormEndPart,
  SelectInput,
  TextNameInput,
  UploadImage,
} from './Join-Form-Elements';
import axios from 'axios';
const JoinSection = () => {
  const [countryInputValue, setCountryInputValue] = useState('');
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [countryId, setCountryId] = useState([]);

  
  
  const getAllCountries = async () => {
    var headers = new Headers();
    headers.append(
      'X-CSCAPI-KEY',
      'M3pETHI0bkUxNjF1VHVxV0VyZ2J4cFBxVW1tTHZyYXpZam9EbVh0RA=='
    );
  
    var requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow',
    };
   try {
     const { data } = await axios.get(
       'https://api.countrystatecity.in/v1/countries',
       requestOptions
     );
     setCountries(data);
   } catch (error) {
    console.log(error);
   }
  };
  useEffect(() => {
    getAllCountries();
  }, []);

  const handleCountryInput = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
    setCountryInputValue(e.target.value);
  };
// const filterCountries = countries.filter((d) =>
//   d.name.toLowerCase().includes(countryInputValue.toLowerCase())
// );

  const [document, setDocument] = useState(null);
  const unionOptions = ['Union 1', 'Union 2', 'Union 3', 'Union 4', 'Union 5'];
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
              <TextNameInput title="First Name" name="first-name" />
              <TextNameInput title="Last Name" name="last-name" />
              <TextNameInput title="Mobile No (Optional)" name="mobile-no-bd" />
              <TextNameInput title=" Refer" name="refer" />
              <TextNameInput
                title="NID or Passport"
                name="nid-or-passport"
                className="sm:col-span-full"
              />

              <SelectInput
                title="Union"
                name="union"
                options={unionOptions}
                value={country}
                onChange={handleCountryInput}
              />
              <SelectInput title="Union" name="union" options={unionOptions} />
              <SelectInput title="Union" name="union" options={unionOptions} />

              <TextNameInput title="Street" name="street" />
              <TextNameInput title="Email" name="email" type="email" />
              <TextNameInput
                title="Date Of Birth"
                name="date-of-birth"
                type="date"
              />
              <TextNameInput title="Password" name="password" type="password" />

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
