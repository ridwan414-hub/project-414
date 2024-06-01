import DonarTable from '../components/DonarListPage/DonarTable';
import Layout from '../layouts/Layout';

const DonarList = () => {
  return (
    <Layout
      title={'Donar List'}
      bannerTitle={'Donar List'}
      bannerDescription={
        'Explore the list of generous donors who have contributed to our cause. Their support helps us make a significant impact in the community.'
      }
    >
      <DonarTable />
    </Layout>
  );
};

export default DonarList;
