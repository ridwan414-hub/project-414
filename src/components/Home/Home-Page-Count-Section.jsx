const HomePageCountSection = () => {
  const dataCount = [
    {
      name: "Happy Donations",
      count: 100,
    },
    {
      name: "Success Mission",
      count: 50,
    },
    {
      name: "Members",
      count: 25,
    },
    {
      name: "Events",
      count: 34,
    },
  ];
  return (
    <section className="flex justify-center bg-[#ef3239]">
      <div className="flex gap-32 max-w-7xl py-20">
        {dataCount?.map((data, index) => (
          <div
            key={index}
            className="text-center text-white flex flex-col gap-2.5 "
          >
            <p className="text-5xl">{data?.count}</p>
            <h2>{data?.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePageCountSection;
