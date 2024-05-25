
import ContactPart from "./Contact-Part";
import DiscussingSection from "./Discussing-Section";
import FindLocationSection from "./Find-Location-Section";

const ContactUsSection = () => {
  return (
    <>
      <ContactPart />
      <section className="flex justify-center my-10">
        <div className="w-full flex gap-7 max-w-7xl">
          <FindLocationSection />
          <DiscussingSection />
        </div>
      </section>
    </>
  );
};

export default ContactUsSection;
