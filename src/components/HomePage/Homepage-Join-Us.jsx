import { useNavigate } from 'react-router-dom';

const HomepageJoinUs = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center mb-10 text-center">
      <div className="w-full max-w-7xl flex flex-col items-center bg-slate-200 gap-5 border-0.5 border-b-red-700 p-10 rounded-xl shadow-2xl">
        <p>Want to Join with us ?</p>
        <button
          className="w-fit btn px-6 py-3 rounded-md bg-red-700/80 hover:bg-red-700 text-white"
          onClick={() => navigate('/join')}
        >
          Join Now
        </button>
      </div>
    </section>
  );
};

export default HomepageJoinUs;
