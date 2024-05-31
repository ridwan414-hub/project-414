const PicturesSection = () => {
  return (
    <div className="w-full bg-slate-50 flex flex-col items-center py-32 px-32 gap-10 mt-12">
      <h1 className="text-4xl font-semibold">
        Our <span className="text-blue-600">Recent Activites</span> At a{' '}
        <span className="text-red-600">Glance</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
        cupiditate voluptate porro non nemo est obcaecati provident laboriosam?
      </p>
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 w-fit">
        <div>
          <img
            className="w-full h-96 object-cover rounded-lg"
            src="https://c1.wallpaperflare.com/preview/118/231/659/people-hands-achievement-group.jpg"
            alt
            loading="lazy"
          />
        </div>
        <div className="row-start-1 col-start-2 col-span-2">
          <img
            className="w-full h-96 object-cover rounded-lg"
            src="https://c1.wallpaperflare.com/preview/932/477/70/social-work-hunger-volunteering.jpg"
            alt
            loading="lazy"
          />
        </div>
        <div className="col-start-3">
          <img
            className="w-full h-96 object-cover rounded-lg"
            src="https://aniportalimages.s3.amazonaws.com/media/details/TYHRTYTYUYTYU.jpg"
            alt
            loading="lazy"
          />
        </div>
        <div>
          <img
            className="w-full h-96 object-cover rounded-lg"
            src="https://media.istockphoto.com/id/1224097948/photo/social-workers-helping-poor-people-during-lockdown-in-kolkata.jpg?s=612x612&w=0&k=20&c=uIoQAXZNZkp5cW77wf0JENxVB1tFe0aO3sIXaUR8tJQ="
            alt
            loading="lazy"
          />
        </div>
        <div>
          <img
            className="w-full h-96 object-cover rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1683140523610-13deecbd20b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVscGluZyUyMHRoZSUyMHBvb3J8ZW58MHx8MHx8fDA%3D"
            alt
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default PicturesSection;

