import LoginForm from '../components/login/LoginForm';
import Layout from '../layouts/Layout';

const Login = () => {
  return (
    <Layout
      title={'Log in'}
      bannerTitle={'Log in'}
      bannerDescription={'Log in Page Description....'}
    >
      <LoginForm />
    </Layout>
  );
};

export default Login;
