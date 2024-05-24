import Layout from '../layouts/Layout';
import HomepageIntro from '../components/HomePage/Homepage-Intro';
import HomePageCountSection from '../components/HomePage/Home-Page-Count-Section';
import HomepageCamping from '../components/HomePage/Homepage-Camping';
import HomepageJoinUs from '../components/HomePage/Homepage-Join-Us';

const Home = () => {
  return (
    <Layout
      bannerTitle={'Welcome to Our Website!'}
      bannerDescription={
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo officia obcaecati debitis vero perspiciatis cumque, expedita doloribus quam ab!'
      }
    >
      <HomepageIntro />
      <HomePageCountSection />
      <HomepageCamping />
      <HomepageJoinUs />
    </Layout>
  );
};

export default Home;
Home;
