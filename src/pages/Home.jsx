import Layout from '../layouts/Layout';
import HomepageIntro from '../components/HomePage/Homepage-Intro';
import HomePageCountSection from '../components/HomePage/Home-Page-Count-Section';
import HomepageCamping from '../components/HomePage/Homepage-Camping';
import HomepageJoinUs from '../components/HomePage/Homepage-Join-Us';
import FivePicturesSection from '../components/HomePage/FivePicturesSection';
import ThreePicturesSection from '../components/HomePage/ThreePicturesSection';

const Home = () => {
  return (
    <Layout
      bannerTitle={'Welcome to Our Website!'}
      bannerDescription={
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo officia obcaecati debitis vero perspiciatis cumque, expedita doloribus quam ab!'
      }
    >
      <ThreePicturesSection/>
      <FivePicturesSection />
      <HomepageIntro />
      <HomepageCamping />
      <HomePageCountSection />
      <HomepageJoinUs />
    </Layout>
  );
};

export default Home;
Home;
