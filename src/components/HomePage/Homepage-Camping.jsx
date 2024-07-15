const HomepageCamping = () => {
  const dataCamp = [
    {
      image:
        "https://c1.wallpaperflare.com/preview/118/231/659/people-hands-achievement-group.jpg",
      title: "Camping for the Homeless",
      description:
        "We are raising funds to provide camping equipment to the homeless.",
      raised: "500",
      goal: "1000",
      duration: "1 month",
    },
    {
      image:
        "https://c1.wallpaperflare.com/preview/932/477/70/social-work-hunger-volunteering.jpg",
      title: "Volunteer Teaching Program",
      description:
        "Join us in our initiative to provide free educational opportunities to underprivileged children.",
      raised: "1200",
      goal: "2000",
      duration: "2 months",
    },
    {
      image:
        "https://aniportalimages.s3.amazonaws.com/media/details/TYHRTYTYUYTYU.jpg",
      title: "Community Garden Project",
      description:
        "Help us create a sustainable community garden to promote food security and environmental stewardship.",
      raised: "800",
      goal: "1500",
      duration: "3 months",
    },
    {
      image:
        "https://media.istockphoto.com/id/1224097948/photo/social-workers-helping-poor-people-during-lockdown-in-kolkata.jpg?s=612x612&w=0&k=20&c=uIoQAXZNZkp5cW77wf0JENxVB1tFe0aO3sIXaUR8tJQ=",
      title: "Emergency Relief Fund",
      description:
        "Support our efforts to provide immediate assistance to communities affected by natural disasters and emergencies.",
      raised: "3500",
      goal: "5000",
      duration: "1 month",
    },
  ];

  return (
    <section className="w-full flex justify-center ">
      <div className="w-full max-w-7xl flex flex-col gap-10 px-6">
        <h2 className="uppercase text-center text-4xl font-semibold">
          Our <span className="text-red-600">Campaigns</span>
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {dataCamp?.map((camp, index) => (
            <div
              key={index}
              className="w-full flex flex-col justify-between border-x-2 border-red-600 p-[1px] rounded-lg hover:bg-red-500 hover:text-white"
            >
              <div>
              <img
                className="w-full h-auto aspect-square object-cover rounded-lg"
                src={camp?.image}
                alt=""
              />
              <h3 className="text-center text-2xl py-4">{camp?.title}</h3>
              </div>
              <div>
                <p className="text-center">{camp?.description}</p>
              </div>
              <div className="flex justify-evenly hover:text-black p-2.5">
                <div className="text-center ">
                  <h4 className="font-bold">Raised(Taka)</h4>
                  <p>{camp?.raised}</p>
                </div>
                <div className="text-center ">
                  <h4 className=" font-bold">Goal</h4>
                  <p>{camp?.goal}</p>
                </div>
                <div className="text-center ">
                  <h4 className=" font-bold">Duration</h4>
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
