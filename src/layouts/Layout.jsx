import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import Skeleton from '../components/Skeleton';
import TopBanner from './TopBanner';
import PageBanner from './PageBanner';
// import { Toaster } from 'react-hot-toast';

const Layout = ({
  children,
  bannerOption = true,
  description,
  keywords,
  author,
  title,
  bannerTitle,
  bannerDescription,
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <TopBanner />
      <Header />
      <div className="w-full flex flex-col items-center">
        {bannerOption && (
          <PageBanner
            bannerTitle={bannerTitle}
            bannerDescription={bannerDescription}
          />
        )}
        <main
          className="m-4 w-full"
          style={{
            minHeight: '70vh',
            backgroundColor: 'aliceblue',
            width: '100%',
          }}
        >
          {children ? children : <Skeleton />}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
