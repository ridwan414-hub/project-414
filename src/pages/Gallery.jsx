import GallerypagePictureSection from '../components/GalleryPage/GallerypagePictureSection';
import Layout from '../layouts/Layout';
const Gallery = () => {
  return (
    <Layout
      title={'Gallery'}
      bannerTitle={'Gallery'}
      bannerDescription={'Explore our latest activities and events.'}
    >
      <GallerypagePictureSection />
    </Layout>
  );
};

export default Gallery;
