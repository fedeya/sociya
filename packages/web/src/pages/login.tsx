import LoginForm from '@Organisms/login-form';
import Layout from '@Templates/layout';

import { withAuthRedirect } from '../utils/auth';

const Login: React.FC = () => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export const getServerSideProps = withAuthRedirect();

export default Login;
