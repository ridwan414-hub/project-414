import { ContactNameInput } from "./Contact-Form-Elements";

const DiscussingSection = () => {
  return (
    <div className="w-3/5 flex flex-col gap-7">
      <h2 className="font-bold text-lg pb-1 border-b-2 border-red-500">
        Interested in discussing?
      </h2>
      <div className="bg-blue-50 rounded h-24">
        <h1 className="text-3xl text-center font-medium p-2">
          Send us your thoughts
        </h1>
        <p className="text-lg text-center p-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <form className="flex bg-purple-50 grow flex-col rounded gap-4 p-2">
        <div className="w-full flex justify-between gap-7">
          <ContactNameInput name="name" title="Name *" />
          <ContactNameInput
            name="email"
            title="Email *"
            type="email"
            className="w-full"
          />
        </div>
        <div className="w-full flex justify-between gap-7 ">
          <ContactNameInput name="subject" title="Subject" />
          <ContactNameInput name="phone" title="Phone *" type="number" />
        </div>
        <ContactNameInput name="message" title="Message *" />
        <button
          type="submit"
          className="rounded-md w-1/2 ml-44 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default DiscussingSection;
