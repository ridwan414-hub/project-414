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
const PatronageCouncil = () => {
  return (
    <Layout
      title={'Patronage Council'}
      bannerTitle={'Patronage Council'}
      bannerDescription={'Patronage Council Page Description....'}
    >
      <MembersListSection
        councilName={'Patronage Council Members'}
        people={people}
      />
      ;
    </Layout>
  );
};

export default PatronageCouncil;
