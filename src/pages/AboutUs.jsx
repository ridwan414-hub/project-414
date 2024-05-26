import Layout from '../layouts/Layout';
import AboutUsFeatureSection from '../components/AboutUsPage/AboutUsFeatureSection';
import AboutusPageOurTeamSection from '../components/AboutUsPage/AboutusPageOurTeamSection';

const AboutUs = () => {
  return (
    <Layout
      title={'About Us'}
      bannerTitle={'About Us'}
      bannerDescription={'About Us Page Description....'}
    >
      <AboutusPageOurTeamSection />
      <AboutUsFeatureSection />
    </Layout>
  );
};

export default AboutUs;
