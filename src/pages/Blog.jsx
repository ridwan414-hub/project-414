import Layout from '../layouts/Layout';
import BlogSection from './BlogPage.jsx/BlogSection';


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
