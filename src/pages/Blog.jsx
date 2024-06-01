import BlogSection from '../components/BlogPage.jsx/BlogSection';
import Layout from '../layouts/Layout';


const Blog = () => {
  return (
    <Layout
      title={'Blogs'}
      bannerTitle={'Blogs'}
      bannerDescription={
        'Explore insightful articles and updates on various topics in our blog section.'
      }
    >
      <BlogSection />
    </Layout>
  );
};

export default Blog;
