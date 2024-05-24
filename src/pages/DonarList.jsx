import DonarTable from '../components/DonarListPage/DonarTable';
import Layout from '../layouts/Layout';

const DonarList = () => {
  return (
    <Layout
      title={'Donar List'}
      bannerTitle={'Donar List'}
      bannerDescription={'Donar List Page Description....'}
    >
      <DonarTable />
    </Layout>
  );
};

export default DonarList;
