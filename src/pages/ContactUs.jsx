import ContactUsSection from '../components/Contact Us/Contact-Us-Section';
import Layout from '../layouts/Layout';

const ContactUs = () => {
    return (
      <Layout
        title={'Contact Us'}
        bannerTitle={'Contact Us'}
        bannerDescription={'We value your feedback and are here to assist you.'}
      >
        <ContactUsSection />
      </Layout>
    );
};

export default ContactUs;