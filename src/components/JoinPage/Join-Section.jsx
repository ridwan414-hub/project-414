import { useEffect, useState } from 'react';
import {
  FormEndPart,
  TextNameInput,
  UploadImage,
} from './Join-Form-Elements';
import axios from 'axios';
import { SelectInput } from './SelectInput';
const JoinSection = () => {
  const [countryIso2, setCountryIso2] = useState('');

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [states, setStates] = useState([]);
  const [state, setState] = useState('');
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');

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
  const getAllStates = async (option) => {
    setCountryIso2(option?.iso2);
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
        `https://api.countrystatecity.in/v1/countries/${option?.iso2}/states`,
        requestOptions
      );
      console.log(data);
      setStates(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllCities = async (option) => {
    console.log(option);
    console.log(countryIso2);
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
        `https://api.countrystatecity.in/v1/countries/${countryIso2}/states/${option?.iso2}/cities`,
        requestOptions
      );
      console.log(data);
      setCities(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCountries();
  }, []);

  const [document, setDocument] = useState(null);
  return (
    <section className="flex justify-center">
      <form className="w-full p-12 max-w-7xl">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base text-center font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm text-center leading-6 text-gray-600">
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
                title="Country"
                name="country"
                options={countries}
                value={country}
                data={country}
                setDataName={setCountry}
                getAllStates={getAllStates}
              />
              <SelectInput
                title="State"
                name="state"
                options={states}
                value={state}
                data={state}
                setDataName={setState}
                getAllCities={getAllCities}
              />
              <SelectInput
                title="City"
                name="city"
                options={cities}
                value={city}
                data={city}
                setDataName={setCity}
              />

              <TextNameInput title="Street" name="street" />
              <TextNameInput title="Create User Name" name="user-name" />
              <TextNameInput title="Email" name="email" type="email" />
              <TextNameInput
                title="Date Of Birth"
                name="date-of-birth"
                type="date"
              />
              <TextNameInput title="Create Password" name="password" type="password" />

              <UploadImage
                title="Your Photo"
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
