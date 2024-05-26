import GallerypagePictureSection from '../components/GalleryPage/GallerypagePictureSection';
import Layout from '../layouts/Layout';
const Gallery = () => {
  return (
    <Layout
      title={'Gallery'}
      bannerTitle={'Gallery'}
      bannerDescription={'Gallery Page Description....'}
    >
      <GallerypagePictureSection/>
    </Layout>
  );
};

export default Gallery;
