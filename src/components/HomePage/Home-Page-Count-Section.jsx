import Statistics from './HomepageStatisticsSection';

const HomePageCountSection = () => {
  return (
    // <section className="flex justify-center bg-[#ef3239]">
    //   <div className="flex gap-32 max-w-7xl py-20">
    //     {dataCount?.map((data, index) => (
    //       <div
    //         key={index}
    //         className="text-center text-white flex flex-col gap-2.5 "
    //       >
    //         <p className="text-5xl">{data?.count}</p>
    //         <h2>{data?.name}</h2>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <Statistics />
    </section>
  );
};

export default HomePageCountSection;
