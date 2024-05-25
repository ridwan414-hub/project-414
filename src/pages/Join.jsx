import JoinSection from "../components/JoinPage/Join-Section";
import Layout from "../layouts/Layout";

const Join = () => {
  return (
    <Layout
      title={'Join us'}
      bannerTitle={'Join Us'}
      bannerDescription={
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo officia obcaecati debitis vero perspiciatis cumque, expedita doloribus quam ab!'
      }
    >
      <JoinSection />
    </Layout>
  );
};

export default Join;
