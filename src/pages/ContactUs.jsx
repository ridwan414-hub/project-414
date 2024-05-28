import ContactUsSection from '../components/Contact Us/Contact-Us-Section';
import Layout from '../layouts/Layout';

const ContactUs = () => {
    return (
      <Layout
        title={'Contact Us'}
        bannerTitle={'Contact Us'}
        bannerDescription={'Contact Us Page Description....'}
      >
        <ContactUsSection />
      </Layout>
    );
};

export default ContactUs;