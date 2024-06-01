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
const RepresentativeCouncil = () => {
  return (
    <Layout
      title={'Representative Council'}
      bannerTitle={'Representative Council'}
      bannerDescription={'Representative Council Page Description....'}
    >
      <MembersListSection
        councilName={'Representative Council Members'}
        people={people}
      />
      ;
    </Layout>
  );
};

export default RepresentativeCouncil;
