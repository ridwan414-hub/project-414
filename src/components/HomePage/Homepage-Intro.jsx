import IntroCard from './Intro-Card';
const HomepageIntro = () => {
  const introData = [
    {
      title: 'About us',
      description:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo officia obcaecati debitis vero perspiciatis cumque, expedita doloribus quam ab!',
      color: 'purple',
    },
    {
      title: 'Our Intension',
      description:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo officia obcaecati debitis vero perspiciatis cumque, expedita doloribus quam ab!',
      color: 'green',
    },
    {
      title: 'Our Goal',
      description:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo officia obcaecati debitis vero perspiciatis cumque, expedita doloribus quam ab!',
      color: 'amber',
    },
    {
      title: 'Our Work',
      description:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo officia obcaecati debitis vero perspiciatis cumque, expedita doloribus quam ab!',
      color: 'rose',
    },
  ];
  return (
    <div className="w-full bg-slate-50 flex flex-col items-center py-32 gap-10 mt-12">
      <h1 className="text-5xl text-[#ed1c24] font-bold text-center">
        Voice of Muslims
      </h1>
      <p className="text-2xl">
        Voice of Muslim Forum is a global socio-cultural and voluntary
        organization!
      </p>
      <div className="flex flex-col flex-wrap gap-4">
        {introData.map((data, index) => (
          <IntroCard
            key={index}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};
export default HomepageIntro;
