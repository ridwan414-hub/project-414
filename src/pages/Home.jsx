import Layout from '../layouts/Layout';
import HomepageIntro from '../components/HomePage/Homepage-Intro';
import HomePageCountSection from '../components/HomePage/Home-Page-Count-Section';
import HomepageCamping from '../components/HomePage/Homepage-Camping';
import HomepageJoinUs from '../components/HomePage/Homepage-Join-Us';
import FivePicturesSection from '../components/HomePage/FivePicturesSection';
import ThreePicturesSection from '../components/HomePage/ThreePicturesSection';
import HomepageTestimonialsSection from '../components/HomePage/HomepageTestimonialsSection';

const Home = () => {
  return (
    <Layout
      bannerTitle={'Welcome to Our Website!'}
      bannerDescription={
        'Our organization relies on the generosity of donors and volunteers who share our vision of a better, more equitable world.'
      }
    >
      <ThreePicturesSection />
      <FivePicturesSection />
      <HomepageIntro />
      <HomepageCamping />
      <HomePageCountSection />
      <HomepageJoinUs />
      <HomepageTestimonialsSection />
    </Layout>
  );
};

export default Home;
Home;
