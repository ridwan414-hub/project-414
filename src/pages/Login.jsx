import LoginForm from '../components/LoginPage/LoginForm';
import Layout from '../layouts/Layout';

const Login = () => {
  return (
    <Layout
      title={'Log in'}
      bannerTitle={'Log in'}
      bannerDescription={'Log in To Explore More Features!'}
      bannerOption={false}
    >
      <LoginForm />
    </Layout>
  );
};

export default Login;
