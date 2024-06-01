import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: 'The Impact of Community Outreach Programs',
    href:1,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-w0lyBjgMA1iVSMu8Qu-SvD66FT2vjnf_8w&s',
    description:
      'Discover how community outreach programs are making a positive impact in underserved communities. Learn about the initiatives focusing on education, healthcare, and social welfare, and how theyre improving the quality of life for many.',
    date: 'Jun 1, 2024',
    datetime: '2024-06-01',
    category: { title: 'Community Outreach', href:1 },
    author: {
      name: 'John Doe',
      role: 'Community Outreach Coordinator',
      href:1,
      imageUrl: 'https://www.svgrepo.com/show/452030/avatar-default.svg',
    },
  },
  {
    id: 2,
    title: 'Empowering Through Education: A Success Story',
    href:2,
    imageUrl:
      'https://content.thriveglobal.com/wp-content/uploads/2018/03/charity.jpg',
    description:
      'Read about a successful educational program empowering individuals through knowledge and skills development. Explore how literacy campaigns and vocational training are creating opportunities for lifelong learning and personal growth.',
    date: 'Jun 3, 2024',
    datetime: '2024-06-03',
    category: { title: 'Educational Programs', href:2 },
    author: {
      name: 'Jane Smith',
      role: 'Education Program Manager',
      href:2,
      imageUrl: 'https://www.svgrepo.com/show/452030/avatar-default.svg',
    },
  },
  {
    id: 3,
    title: 'Promoting Health and Wellness in the Community',
    href:3,
    imageUrl:
      'https://brightspotfundraising.co.uk/wp-content/uploads/2023/07/Blog_Culture_first_how_one_small_charity_made_its_fundraising_so_dynamic.jpg',
    description:
      'Learn about initiatives promoting health and wellness in the community, including medical camps, mental health support, and nutrition programs. Explore how these efforts are ensuring that every individual has the opportunity to lead a healthy and fulfilling life.',
    date: 'Jun 5, 2024',
    datetime: '2024-06-05',
    category: { title: 'Health and Wellness', href:3 },
    author: {
      name: 'Emily Johnson',
      role: 'Health and Wellness Coordinator',
      href:3,
      imageUrl: 'https://www.svgrepo.com/show/452030/avatar-default.svg',
    },
  },
  {
    id: 4,
    title: 'Empowering Women: A Path to Equality',
    href:4,
    imageUrl:
      'https://t4.ftcdn.net/jpg/06/11/31/05/360_F_611310559_0oKXycQ80iqUCi2jP4w86P38QZhnaInA.jpg',
    description:
      'Explore initiatives aimed at empowering women and promoting gender equality. Discover how education, entrepreneurship, and advocacy are driving positive change in communities worldwide.',
    date: 'Jun 7, 2024',
    datetime: '2024-06-07',
    category: { title: 'Women Empowerment', href:4 },
    author: {
      name: 'Sarah Williams',
      role: 'Gender Equality Advocate',
      href:4,
      imageUrl: 'https://www.svgrepo.com/show/452030/avatar-default.svg',
    },
  },
  {
    id: 5,
    title: 'Sustainable Development: A Path to a Better Future',
    href:5,
    imageUrl:
      'https://www.cccc.org/news_blogs/wp-content/uploads/2024/03/Accreditation-blog-images-1.png',
    description:
      'Learn about sustainable development initiatives focused on environmental conservation, renewable energy, and eco-friendly practices. Discover how these efforts are paving the way for a greener and more sustainable future.',
    date: 'Jun 9, 2024',
    datetime: '2024-06-09',
    category: { title: 'Sustainable Development', href:5 },
    author: {
      name: 'David Brown',
      role: 'Environmental Activist',
      href:5,
      imageUrl: 'https://www.svgrepo.com/show/452030/avatar-default.svg',
    },
  },
  {
    id: 6,
    title: 'Fostering Diversity and Inclusion: Building Stronger Communities',
    href:6,
    imageUrl:
      'https://kinsta.com/wp-content/uploads/2017/10/wordpress-donation-plugins-1.png',
    description:
      'Discover the importance of diversity and inclusion in building stronger and more resilient communities. Learn how embracing diversity fosters creativity, innovation, and collaboration for a brighter future.',
    date: 'Jun 11, 2024',
    datetime: '2024-06-11',
    category: { title: 'Diversity and Inclusion', href:6 },
    author: {
      name: 'Alexandra Lee',
      role: 'Diversity and Inclusion Specialist',
      href:6,
      imageUrl: 'https://www.svgrepo.com/show/452030/avatar-default.svg',
    },
  },
];


const BlogSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how we have to grow our works with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="ab tn">
                <img
                  src={post.imageUrl}
                  alt
                  className="mo tn adq aih aqd bxv cva object-cover object-center w-full h-64 rounded-lg bg-gray-100 "
                />
                <div className="aa ak adq bbs bbw bcn" />
              </div>

              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
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
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link to={`/blog/${post.href}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
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
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </Link>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
