import { useState } from 'react';

const IntroCard = ({ data }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="p-12 border-b-4 border-b-red-600 bg-slate-100 hover:bg-red-500 hover:text-white">
      <h2 onClick={() => setModal(true)} className="cursor-pointer text-2xl">
        {data?.title}
      </h2>
      {!modal && (
        <dialog role="modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};
export default IntroCard;
