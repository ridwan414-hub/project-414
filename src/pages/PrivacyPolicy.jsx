import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';

const PrivacyPolicy = () => {
    return (
      <Layout
        title={'Privacy Policy'}
        bannerTitle={'Privacy Policy'}
        bannerDescription={
          'Welcome to our Privacy Policy page. Your privacy matters to us, and we are committed to protecting your personal information. This page outlines how we collect, use, and protect your data to ensure a safe and secure browsing experience. Please take a moment to review our privacy practices.'
        }
      >
        <div className="p-8 font-sans mx-32">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-6">Effective date: 22 / 02 / 2024</p>

          <p className="mb-6">
            Welcome to Voice of Muslims. We are committed to protecting your
            privacy and ensuring that your personal information is handled in a
            safe and responsible manner. This Privacy Policy outlines how we
            collect, use, and protect your information when you visit our
            website or use our services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <p className="mb-4">
            We may collect and process the following data about you:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              Information you provide by filling in forms on our site, such as
              your name, email address, and other contact details.
            </li>
            <li className="mb-2">
              Details of your visits to our site, including, but not limited to,
              traffic data, location data, weblogs, and other communication
              data.
            </li>
            <li className="mb-2">
              Information you provide when you communicate with us for any
              reason.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p className="mb-4">
            The information we collect from you may be used in the following
            ways:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              To provide you with information, products, or services that you
              request from us.
            </li>
            <li className="mb-2">
              To ensure that content from our site is presented in the most
              effective manner for you and your device.
            </li>
            <li className="mb-2">
              To carry out our obligations arising from any contracts entered
              into between you and us.
            </li>
            <li className="mb-2">
              To allow you to participate in interactive features of our
              service, when you choose to do so.
            </li>
            <li className="mb-2">
              To notify you about changes to our service.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            How We Protect Your Information
          </h2>
          <p className="mb-6">
            We implement a variety of security measures to maintain the safety
            of your personal information when you enter, submit, or access your
            personal information. However, no method of transmission over the
            Internet, or method of electronic storage, is 100% secure.
            Therefore, while we strive to use commercially acceptable means to
            protect your personal information, we cannot guarantee its absolute
            security.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Your Consent</h2>
          <p className="mb-6">
            By using our site, you consent to our privacy policy.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Changes to Our Privacy Policy
          </h2>
          <p className="mb-6">
            If we decide to change our privacy policy, we will post those
            changes on this page, and/or update the Privacy Policy modification
            date above.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please{' '}
            <Link to='/contact-us' className='text-blue-400 underline'>contact us</Link>.
          </p>
        </div>
      </Layout>
    );
};

export default PrivacyPolicy;