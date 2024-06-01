import Layout from '../layouts/Layout';
import AboutUsFeatureSection from '../components/AboutUsPage/AboutUsFeatureSection';
import AboutusPageOurTeamSection from '../components/AboutUsPage/AboutusPageOurTeamSection';

const AboutUs = () => {
  return (
    <Layout
      title={'About Us'}
      bannerTitle={'About Us'}
      bannerDescription={'We are a team of social workers who are passionate about helping others.'}
    >
      <AboutusPageOurTeamSection />
      <AboutUsFeatureSection />
    </Layout>
  );
};

export default AboutUs;
