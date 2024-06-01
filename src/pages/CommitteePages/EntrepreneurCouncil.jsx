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
const EntrepreneurCouncil = () => {
  return (
    <Layout
      title={'Entrepreneur Council'}
      bannerTitle={'Entrepreneur Council'}
      bannerDescription={'Entrepreneur Council Page Description....'}
    >
      <MembersListSection
        councilName={'Entrepreneur Council Members'}
        people={people}
      />
      ;
    </Layout>
  );
};

export default EntrepreneurCouncil;
