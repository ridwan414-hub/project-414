
import ContactPart from "./Contact-Part";
import DiscussingSection from "./Discussing-Section";
import FindLocationSection from "./Find-Location-Section";

const ContactUsSection = () => {
  return (
    <>
      <ContactPart />
      <section className="flex justify-center my-10">
        <div className="w-full flex flex-col md:flex-row gap-4 lg:gap-7 max-w-7xl px-4 lg:px-28">
          <FindLocationSection />
          <DiscussingSection />
        </div>
      </section>
    </>
  );
};

export default ContactUsSection;
