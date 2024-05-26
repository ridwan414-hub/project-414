import { Link } from "react-router-dom";

const FindLocationSection = () => {
  return (
    <div className="w-2/5 flex flex-col gap-7">
      <h2 className="font-bold text-lg pb-1 border-b-2 border-red-500">
        Find Our Location
      </h2>
      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height={460}
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=106/A,Babunagar,Feni%20,%20Bangladesh+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        >
          <Link to="https://www.gps.ie/">gps devices</Link>;
        </iframe>
      </div>
    </div>
  );
};

export default FindLocationSection;
