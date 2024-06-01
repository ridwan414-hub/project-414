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
const AdvisoryCouncil = () => {
    return (
      <Layout
        title={'Advisory Council'}
        bannerTitle={'Advisory Council'}
        bannerDescription={'Advisory Council Page Description....'}
      >
        <MembersListSection councilName={'Advisory Council Members'} people={people} />;
      </Layout>
    );
};

export default AdvisoryCouncil;


