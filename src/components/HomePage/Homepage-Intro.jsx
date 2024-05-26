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
    <div className="w-full bg-gradient-to-r from-cyan-50 to-blue-100 flex flex-col items-center py-16 gap-10 mt-12">
      <h1 className="text-5xl text-[#ed1c24] font-bold text-center">
        Voice of Muslims
      </h1>
      <p className="text-2xl">
        Voice of Muslim Forum is a global socio-cultural and voluntary
        organization!
      </p>
      <div className="flex flex-col flex-wrap gap-4">
        <div
          className={
            'dropdown shadow-lg rounded-box hover:dropdown-open mr-96 hover:dropdown-right p-12 border-r-2 border-r-red-600  hover:bg-red-400 hover:text-black'
          }
        >
          <h2 className="cursor-pointer text-2xl">{introData[0].title}</h2>
          <ul
            className={
              'dropdown-content text-sm px-2 shadow-lg bg-red-200 font-medium rounded-box w-96 h-32 ml-1 hover:bg-none'
            }
          >
            <li className="text-center text-sm p-2 mt-6">
              <div>{introData[0].description}</div>
            </li>
          </ul>
        </div>
        <div
          className={
            'dropdown shadow-lg rounded-box hover:dropdown-open ml-96 hover:dropdown-left p-12 border-l-2 border-l-green-600  hover:bg-green-400 hover:text-black'
          }
        >
          <h2 className="cursor-pointer text-2xl">{introData[1].title}</h2>
          <ul
            className={
              'dropdown-content text-sm px-2 shadow-lg bg-green-200 font-medium rounded-box w-96 h-32 ml-1 hover:bg-none'
            }
          >
            <li className="text-center text-sm p-2 mt-6">
              <div>{introData[1].description}</div>
            </li>
          </ul>
        </div>
        <div
          className={
            'dropdown shadow-lg rounded-box hover:dropdown-open mr-96 hover:dropdown-right p-12 border-r-2 border-r-purple-600  hover:bg-purple-400 hover:text-black'
          }
        >
          <h2 className="cursor-pointer text-2xl">{introData[2].title}</h2>
          <ul
            className={
              'dropdown-content text-sm px-2 shadow-lg bg-purple-200 font-medium rounded-box w-96 h-32 ml-1 hover:bg-none'
            }
          >
            <li className="text-center text-sm p-2 mt-6">
              <div>{introData[2].description}</div>
            </li>
          </ul>
        </div>
        <div
          className={
            'dropdown shadow-lg rounded-box hover:dropdown-open ml-96 hover:dropdown-left p-12 border-l-2 border-l-blue-600  hover:bg-blue-400 hover:text-black'
          }
        >
          <h2 className="cursor-pointer text-2xl">{introData[3].title}</h2>
          <ul
            className={
              'dropdown-content text-sm px-2 shadow-lg bg-blue-200 font-medium rounded-box w-96 h-32 ml-1 hover:bg-none'
            }
          >
            <li className="text-center text-sm p-2 mt-6">
              <div>{introData[3].description}</div>
            </li>
          </ul>
        </div>

       
      </div>
    </div>
  );
};
export default HomepageIntro;
