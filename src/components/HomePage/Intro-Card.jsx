const IntroCard = ({ data }) => {
  const { title, description, color } = data;
  return color ? (
    <div
      className={'dropdown shadow-lg rounded-box hover:dropdown-open mr-96 hover:dropdown-right p-12 border-r-2 border-r-red-600  hover:bg-red-500 hover:text-black'}
    >
      <h2 className="cursor-pointer text-2xl">{title}</h2>
      <ul
        // style={{'backgroundColor':'red'}}
        className={'dropdown-content text-sm px-2 shadow-lg bg-green-100 font-medium rounded-box w-96 h-32 ml-1 hover:bg-none'}
      >
        <li className="text-center p-2 mt-6">
          <div>{description}</div>
        </li>
      </ul>
    </div>
  ) : null;
};
export default IntroCard;
