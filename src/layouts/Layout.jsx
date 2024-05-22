/* eslint-disable react/prop-types */
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
// import { Toaster } from 'react-hot-toast';

const Layout = ({ children, description, keywords, author, title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <section className="flex justify-center">
        <main
          className="border-2 border-gray-300 rounded-md p-4 m-4 w-full"
          style={{
            minHeight: '70vh',
            backgroundColor: 'aliceblue',
            maxWidth: '1280px',
          }}
        >
          {children}
          <div className="flex flex-col gap-4 w-full">
            <div className="skeleton h-48 w-full"></div>
            <div className="skeleton h-14 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  children: 'Default children',
  title: 'Voice of Muslims',
  description: 'We all are Muslims and we are proud of it.',
  keywords: 'Donation Blog Muslim Remitance Halal Help Charity Zakat Sadqah',
  author: 'VOM Team',
};

export default Layout;
