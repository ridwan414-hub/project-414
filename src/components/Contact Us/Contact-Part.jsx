import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { useWebsiteInfo } from "../../contexts/WebsiteInfo";

const ContactPart = () => {
    const [WebsiteInfo] = useWebsiteInfo();
    console.log(WebsiteInfo);
    const { site_email, site_mobile, site_address } = WebsiteInfo;
  return (
    <section className="flex justify-center">
      <div className="w-full flex text-center justify-center max-w-7xl">
        <div className="w-full flex flex-col gap-2 items-center py-16 bg-green-50">
          <IoIosCall className="w-7 h-7 fill-red-600" />
          <p className="text-xl font-bold">Call Us</p>
          <p className="text-sm text-[#808080] font-serif font-bold">
            {site_mobile}
          </p>
        </div>
        <div className="w-full flex flex-col gap-2 items-center py-16 bg-yellow-50 border-x-2">
          <IoLocationSharp className="w-7 h-7 fill-red-600" />
          <p className="text-xl font-bold">Address</p>
          <p className="text-sm text-[#808080] font-serif font-bold">
            {site_address}
          </p>
        </div>
        <div className="w-full flex flex-col gap-2 items-center py-16 bg-violet-50">
          <FaEnvelope className="w-7 h-7 fill-red-600" />
          <p className="text-xl font-bold">Call Us</p>
          <p className="text-[#808080] font-serif font-bold">{site_email}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactPart;
