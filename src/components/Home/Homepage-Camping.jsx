const HomepageCamping = () => {
  const dataCamp = [
    {
      title: "Camping 1",
      description: "This is the description of camping 1",
      raised: 1000,
      goal: 2000,
      duration: 30,
    },
    {
      title: "Camping 1",
      description: "This is the description of camping 1",
      raised: 1000,
      goal: 2000,
      duration: 30,
    },
    {
      title: "Camping 1",
      description: "This is the description of camping 1",
      raised: 1000,
      goal: 2000,
      duration: 30,
    },
    {
      title: "Camping 1",
      description: "This is the description of camping 1",
      raised: 1000,
      goal: 2000,
      duration: 30,
    },
  ];
  return (
    <section className="py-28 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col gap-10">
        <h2 className="uppercase text-center text-4xl font-bold">
          Our <span className="text-[#ed1c24]">Camping</span>
        </h2>
        <div className="flex gap-8">
          {dataCamp?.map((camp, index) => (
            <div
              key={index}
              className="border-4 border-red-700/70 p-2.5 rounded-lg"
            >
              <img
                className="w-fit object-cover"
                src="https://i.ibb.co/tPrnqgJ/image-1.png"
                alt=""
              />
              <h3>{camp?.title}</h3>
              <p>{camp?.description}</p>
              <div className="flex w-full justify-between p-2.5">
                <div className="text-center">
                  <h4 className="text-red-700 font-bold">Raised</h4>
                  <p>{camp?.raised}</p>
                </div>
                <div className="text-center">
                  <h4 className="text-red-700 font-bold">Goal</h4>
                  <p>{camp?.goal}</p>
                </div>
                <div className="text-center">
                  <h4 className="text-red-700 font-bold">Duration</h4>
                  <p>{camp?.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageCamping;
