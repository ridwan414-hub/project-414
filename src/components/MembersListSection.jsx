const MembersListSection = ({ people,councilName }) => {
  return (
    <div className="bg-white py-18 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="flex flex-col gap-5 max-w-2xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-center md:text-left tracking-tight text-gray-900 ">
            Meet Our {councilName}
          </h2>
          <p className="md:text-lg leading-8 text-gray-600">
            Embrace freedom as you navigate new challenges, mastering each with
            confidence and grace. Live with purpose, thriving on opportunities
            and overcoming obstacles with resilience and strength.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MembersListSection;
