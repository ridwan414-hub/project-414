import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../layouts/Layout';

const post = {
  id: 1,
  title: 'The Impact of Community Outreach Programs',
  href: 1,
  imageUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-w0lyBjgMA1iVSMu8Qu-SvD66FT2vjnf_8w&s',
  paragraphs: [
    'Community outreach programs play a crucial role in addressing the needs of underserved communities.',
    'Learn about the various initiatives focusing on education, healthcare, and social welfare, and how they are positively impacting the lives of individuals and families.',
    'These programs provide essential services, empower individuals, and foster a sense of community, ultimately contributing to a more equitable and inclusive society.',
    "Through community outreach, marginalized populations gain access to resources and support that they may otherwise lack. Whether it's providing free medical clinics, offering tutoring and mentorship programs, or organizing food drives, these initiatives address immediate needs while also working towards long-term solutions.",
    'Furthermore, community outreach fosters collaboration among diverse groups, bringing together volunteers, organizations, and local government agencies to work towards common goals. By working together, communities can leverage their collective strengths and resources to create meaningful change.',
    'The impact of community outreach programs extends beyond the individuals directly served. By strengthening communities and addressing systemic issues, these programs contribute to a more resilient and thriving society for everyone.',
  ],
  date: 'Jun 1, 2024',
  datetime: '2024-06-01',
  category: { title: 'Community Outreach', href: 1 },
  author: {
    name: 'John Doe',
    role: 'Community Outreach Coordinator',
    href: 1,
    imageUrl: 'https://www.svgrepo.com/show/452030/avatar-default.svg',
  },
};

const SingleBlog = () => {
    return (
      <Layout title={post?.title} bannerOption={false}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white min-h-screen"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {post?.title}
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how community outreach programs make a positive impact.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl">
              <article className="flex flex-col items-start justify-between">
                <div className="ab tn">
                  <img
                    src={post?.imageUrl}
                    alt=""
                    className="mo tn adq aih aqd bxv cva object-cover object-center w-full h-64 rounded-lg bg-gray-100"
                  />
                  <div className="aa ak adq bbs bbw bcn" />
                </div>

                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post?.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <Link
                    to={`/blog/${post.href}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </Link>
                </div>
                <div className="group relative">
                  {post.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="mt-5 text-sm leading-6 text-gray-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <Link to={`/blog/${post.author.href}`}>
                        {post.author.name}
                      </Link>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </motion.div>
      </Layout>
    );
};

export default SingleBlog;
