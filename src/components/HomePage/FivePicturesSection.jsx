import { Link } from "react-router-dom";


const events = [
  {
    name: 'Awareness Workshop',
    description:
      'Learn about environmental issues and sustainable practices through interactive workshops and presentations from experts in the field.',
    date: '22nd - 24th March 2022',
    image:
      'https://c1.wallpaperflare.com/preview/118/231/659/people-hands-achievement-group.jpg',
  },
  {
    name: 'Community Clean-Up',
    description:
      'Join us for a day dedicated to cleaning up our local parks and streets. Volunteers will be provided with all necessary supplies.',
    date: '5th April 2022',
    image:
      'https://c1.wallpaperflare.com/preview/932/477/70/social-work-hunger-volunteering.jpg',
    style: 'row-span-1 sm:col-span-2',
  },
  {
    name: 'Food Drive',
    description:
      'Help us collect non-perishable food items to support our local food banks. Donations can be dropped off at designated locations.',
    date: '10th - 12th April 2022',
    image:
      'https://aniportalimages.s3.amazonaws.com/media/details/TYHRTYTYUYTYU.jpg',
  },
  {
    name: 'Charity Fun Run',
    description:
      'Participate in our annual charity run to raise funds for local shelters. All ages are welcome, and there will be prizes for top finishers.',
    date: '15th April 2022',
    image:
      'https://media.istockphoto.com/id/1224097948/photo/social-workers-helping-poor-people-during-lockdown-in-kolkata.jpg?s=612x612&w=0&k=20&c=uIoQAXZNZkp5cW77wf0JENxVB1tFe0aO3sIXaUR8tJQ=',
  },
  {
    name: 'Tree Planting Day',
    description:
      'Contribute to a greener future by planting trees in our community parks. All tools and instructions will be provided.',
    date: '22nd April 2022',
    image:
      'https://plus.unsplash.com/premium_photo-1683140523610-13deecbd20b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVscGluZyUyMHRoZSUyMHBvb3J8ZW58MHx8MHx8fDA%3D',
  },
];



const PicturesSection = () => {
  return (
    <div className="w-full bg-slate-50 flex flex-col items-center py-16 px-4 sm:px-8 md:px-16 lg:px-32 gap-10 mt-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
        Our <span className="text-blue-600">Recent Activities</span> At a{' '}
        <span className="text-red-600">Glance</span>
      </h1>
      <p className="text-center px-4 md:px-16 lg:px-32">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
        cupiditate voluptate porro non nemo est obcaecati provident laboriosam?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl">
        {events.map((event, index) => (
          <div key={index} className={`relative ${event?.style}`}>
            <img
              className="w-full h-60 sm:h-80 md:h-96 object-cover rounded-lg"
              src={event.image}
              alt={event.name}
              loading="lazy"
            />
            <div className="absolute opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center duration-300 bg-black bg-opacity-50 inset-0 text-white">
              <div className="flex flex-col justify-center h-full py-6 px-4">
                <h1 className="text-center my-4 text-purple-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  {event.name}
                </h1>
                <p className="text-center my-4 text-green-400 sm:text-xl md:text-xl lg:text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 inline-block mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  {event.date}
                </p>
                <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-8">
                  {event.description}
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mx-auto">
                  <Link to="/events">See More</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default PicturesSection;
