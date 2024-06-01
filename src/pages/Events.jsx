
  import Layout from "../layouts/Layout";

  const Events = () => {
const events = [
  {
    image:
      'https://c1.wallpaperflare.com/preview/118/231/659/people-hands-achievement-group.jpg',
    title: 'Camping for the Homeless',
    description: `Join us in our initiative to provide camping equipment to the homeless. By donating, you're helping us ensure that those without shelter have access to essential camping gear, including tents, sleeping bags, and cooking supplies. Together, we can make a meaningful difference in the lives of those in need.`,
    raised: '500',
    goal: '1000',
    duration: '1 month',
  },
  {
    image:
      'https://c1.wallpaperflare.com/preview/932/477/70/social-work-hunger-volunteering.jpg',
    title: 'Volunteer Teaching Program',
    description: `Be a part of our volunteer teaching program and help us provide free educational opportunities to underprivileged children. With your support, we can offer quality education to children who may not otherwise have access to it. Join us today and make a positive impact on the future of these young learners.`,
    raised: '1200',
    goal: '2000',
    duration: '2 months',
  },
  {
    image:
      'https://aniportalimages.s3.amazonaws.com/media/details/TYHRTYTYUYTYU.jpg',
    title: 'Community Garden Project',
    description: `Let's come together to create a sustainable community garden that promotes food security and environmental stewardship. Your contribution will help us establish and maintain a green space where community members can grow fresh produce, learn about sustainable gardening practices, and connect with nature.`,
    raised: '800',
    goal: '1500',
    duration: '3 months',
  },
  {
    image:
      'https://media.istockphoto.com/id/1224097948/photo/social-workers-helping-poor-people-during-lockdown-in-kolkata.jpg?s=612x612&w=0&k=20&c=uIoQAXZNZkp5cW77wf0JENxVB1tFe0aO3sIXaUR8tJQ=',
    title: 'Emergency Relief Fund',
    description: `Support our efforts to provide immediate assistance to communities affected by natural disasters and emergencies. Your donation will enable us to deliver essential supplies, offer medical aid, and provide shelter to those in crisis. Together, we can make a difference in times of need.`,
    raised: '3500',
    goal: '5000',
    duration: '1 month',
  },
];



    return (
      <Layout
        title={'Events'}
        bannerTitle={'Events'}
        bannerDescription={'Welcome to our Events page. Explore the exciting events we have arranged to make a positive impact on our community and beyond. From charity drives to volunteer opportunities, theres something for everyone to get involved in. Browse through the events below and join us in making a difference!'}
      >
        <section className="px-10 bg-gradient-to-b from-white bg-yellow-50 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl text-center font-bold mb-8">Events-2024</h2>
            <div className="grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 px-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <div
                    className="relative h-0"
                    style={{ paddingBottom: '56.25%' }}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex justify-between text-gray-700">
                      <div>
                        <p>Raised: {event.raised}</p>
                        <p>Goal: {event.goal}</p>
                      </div>
                      <p>Duration: {event.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  };

  export default Events;



 