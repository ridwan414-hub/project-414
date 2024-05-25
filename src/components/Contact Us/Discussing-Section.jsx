import { ContactNameInput } from "./Contact-Form-Elements";

const DiscussingSection = () => {
  return (
    <div className="w-3/5 flex flex-col gap-7">
      <h2 className="font-bold text-lg pb-1 border-b-2 border-red-500">
        Interested in discussing?
      </h2>
      <form className="flex grow flex-col gap-4">
        <div className="w-full flex justify-between gap-7">
          <ContactNameInput
            name="name"
            title="Name *"
          />
          <ContactNameInput
            name="email"
            title="Email *"
            type="email"
            className="w-full"
          />
        </div>
        <div className="w-full flex justify-between gap-7">
          <ContactNameInput
            name="subject"
            title="Subject"
          />
          <ContactNameInput
            name="phone"
            title="Phone *"
            type="number"
          />
        </div>

      </form>
    </div>
  );
};

export default DiscussingSection;
