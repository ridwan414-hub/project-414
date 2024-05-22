import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import Skeleton from '../components/Skeleton';
import TopBanner from './TopBanner';
import PageBanner from './PageBanner';
// import { Toaster } from 'react-hot-toast';

const Layout = ({
  children,
  description,
  keywords,
  author,
  title,
  bannerTitle,
  bannerDescription,
}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <TopBanner />
      <Header />
      <section className="flex justify-center flex-col">
        <div className='w-full flex flex-col items-center justify-center'>
          <PageBanner
            bannerTitle={bannerTitle}
            bannerDescription={bannerDescription}
          />
          <main
            className="border-2 border-gray-300 rounded-md p-4 m-4 w-full"
            style={{
              minHeight: '70vh',
              backgroundColor: 'aliceblue',
              maxWidth: '1280px',
            }}
          >
            {children ? children : <Skeleton />}
          </main>
        </div>
      </section>
      <Footer />
    </div>
  );
};
// Layout.defaultProps = {
//   children: 'Default children',
//   title: 'Voice of Muslims',
//   description: 'We all are Muslims and we are proud of it.',
//   keywords: 'Donation Blog Muslim Remitance Halal Help Charity Zakat Sadqah',
//   author: 'VOM Team',
// };

export default Layout;
