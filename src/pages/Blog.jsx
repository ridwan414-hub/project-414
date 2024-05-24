import BlogSection from '../components/BlogPage.jsx/BlogSection';
import Layout from '../layouts/Layout';


const Blog = () => {
  return (
    <Layout
      title={'Blog'}
      bannerTitle={'Blogs'}
      bannerDescription={'Blogs Page Description....'}
    >
      <BlogSection />
    </Layout>
  );
};

export default Blog;
