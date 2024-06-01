import MembersListSection from '../MembersListSection';

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

const AboutusPageOurTeamSection = () => {
  return (
    <MembersListSection
      councilName={'Board of Directors'}
      people={people}
    />
  );
};

export default AboutusPageOurTeamSection;
