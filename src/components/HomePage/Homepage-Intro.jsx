import { useState } from "react";

const HomepageIntro = () => {
  const introData = [
    {
      title: "Our Mission",
      description:
        "Our mission is to provide a platform for Muslims to share their thoughts, ideas, and experiences with the world. We aim to promote understanding and tolerance among people of different faiths and cultures.",
      color: "red",
    },
    {
      title: "Our Vision",
      description:
        "Our vision is to create a world where Muslims are respected and valued for their contributions to society. We believe that by sharing our stories and experiences, we can build bridges of understanding and cooperation between people of all backgrounds.",
      color: "blue",
    },
    {
      title: "Our Values",
      description:
        "Our values are rooted in the teachings of Islam, which emphasize compassion, justice, and equality. We believe in the dignity and worth of every human being and strive to create a world where everyone is treated with respect and fairness.",
      color: "purple",
    },
    {
      title: "Our Goals",
      description:
        "Our goals are to promote dialogue and understanding between Muslims and people of other faiths, to combat stereotypes and misconceptions about Islam, and to empower Muslims to make a positive impact in their communities and the world.",
      color: "slateblue",
    },
  ];
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full bg-gradient-to-r from-cyan-50 to-blue-100 flex flex-col items-center px-4 py-16 gap-10 mt-12">
      <h1 className="text-4xl md:text-5xl text-[#ed1c24] font-semibold text-center">
        Voice of <span className="text-blue-600">Muslims</span>
      </h1>
      <p className="md:text-2xl text-center">
        Voice of Muslim Forum is a global socio-cultural and voluntary
        organization!
      </p>
      <div className="flex flex-col flex-wrap gap-4">
        {introData.map((data, index) => (
          <div
            key={index}
            style={{
              borderColor: data.color,
              backgroundColor: isHovered ? data.color : "transparent",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`dropdown shadow-xl rounded-box hover:dropdown-open ${
              index % 2 === 0
                ? "mr-40 lg:mr-96 hover:dropdown-right border-r-2"
                : "ml-40 lg:ml-96 hover:dropdown-left border-l-2"
            } p-6 md:p-12 hover:bg-[${data.color}] hover:text-black`}
          >
            <h2 className="cursor-pointer md:text-2xl">{data.title}</h2>
            <ul
              className={
                "w-full lg:w-[150%] max-h-16 md:max-h-32 overflow-scroll no-scrollbar dropdown-content px-5 shadow-2xl bg-red-200 font-medium rounded-md mx-1 hover:bg-none"
              }
            >
              <li className="text-center text-[10px] md:text-xs md:p-2 my-2">
                <div>{data.description}</div>
              </li>
            </ul>
          </div>
        ))}

        {/* <div
          className={
            'dropdown shadow-xl rounded-box hover:dropdown-open  hover:dropdown-down p-12 border-l-2 border-l-green-600  hover:bg-green-400 hover:text-black'
          }
        >
          <h2 className="cursor-pointer text-2xl">{introData[1].title}</h2>
          <ul
            className={
              'dropdown-content text-sm px-2 shadow-2xl bg-green-200 font-medium rounded-box w-96 h-32 ml-1 hover:bg-none'
            }
          >
            <li className="text-center text-sm p-2 mt-2">
              <div>{introData[1].description}</div>
            </li>
          </ul>
        </div>
        <div
          className={
            'dropdown shadow-xl rounded-box hover:dropdown-open  hover:dropdown-down p-12 border-r-2 border-r-purple-600  hover:bg-purple-400 hover:text-black'
          }
        >
          <h2 className="cursor-pointer text-2xl">{introData[2].title}</h2>
          <ul
            className={
              'dropdown-content text-sm px-2 shadow-2xl bg-purple-200 font-medium rounded-box w-96 h-32 ml-1 hover:bg-none'
            }
          >
            <li className="text-center text-sm p-2 mt-2">
              <div>{introData[2].description}</div>
            </li>
          </ul>
        </div>
        <div
          className={
            'dropdown shadow-xl rounded-box hover:dropdown-open  hover:dropdown-down p-12 border-l-2 border-l-blue-600  hover:bg-blue-400 hover:text-black'
          }
        >
          <h2 className="cursor-pointer text-2xl">{introData[3].title}</h2>
          <ul
            className={
              'dropdown-content text-sm px-2 shadow-2xl bg-blue-200 font-medium rounded-box w-96 h-32 ml-1 hover:bg-none'
            }
          >
            <li className="text-center text-sm p-2 mt-2">
              <div>{introData[3].description}</div>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};
export default HomepageIntro;
