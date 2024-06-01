import MembersListSection from '../../components/MembersListSection';
import Layout from '../../layouts/Layout';
const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://www.svgrepo.com/show/452030/avatar-default.svg',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://www.svgrepo.com/show/452030/avatar-default.svg',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://www.svgrepo.com/show/452030/avatar-default.svg',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://www.svgrepo.com/show/452030/avatar-default.svg',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://www.svgrepo.com/show/452030/avatar-default.svg',
  },
];
const BoardOfDirectors = () => {
    return (
      <Layout
        title={'Board of Directors'}
        bannerTitle={'Board of Directors'}
        bannerDescription={'Board of Directors Page Description....'}
      >
        <MembersListSection councilName={'Board of Directors Members'} people={people} />;
      </Layout>
    );
};


export default BoardOfDirectors;
