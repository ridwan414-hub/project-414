import JoinSection from "../components/JoinPage/Join-Section";
import Layout from "../layouts/Layout";

const Join = () => {
  return (
    <Layout
      title={'Join us'}
      bannerTitle={'Join Us'}
      bannerDescription={
        'Join us to get access to all the features of our platform!'
      }
    >
      <JoinSection />
    </Layout>
  );
};

export default Join;
