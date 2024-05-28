import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";

const ContactPart = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full flex text-center justify-center max-w-7xl">
        <div className="w-full flex flex-col gap-2 items-center py-16 bg-[#f1f1f1]">
          <IoIosCall className="w-7 h-7 fill-red-600" />
          <p className="text-xl font-bold">Call Us</p>
          <p className="text-sm text-[#808080] font-serif font-bold">
            +88012-3456789
          </p>
        </div>
        <div className="w-full flex flex-col gap-2 items-center py-16 bg-[#f1f1f1] border-x-2">
          <IoLocationSharp className="w-7 h-7 fill-red-600" />
          <p className="text-xl font-bold">Address</p>
          <p className="text-sm text-[#808080] font-serif font-bold">
            Chittagong
          </p>
        </div>
        <div className="w-full flex flex-col gap-2 items-center py-16 bg-[#f1f1f1]">
          <FaEnvelope className="w-7 h-7 fill-red-600" />
          <p className="text-xl font-bold">Call Us</p>
          <p className="text-[#808080] font-serif font-bold">+88012-3456789</p>
        </div>
      </div>
    </section>
  );
};

export default ContactPart;
