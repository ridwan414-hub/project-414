import Layout from '../layouts/Layout';
import DonarTable from './DonarListPage/DonarTable';

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
