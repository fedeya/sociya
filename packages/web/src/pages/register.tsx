import Layout from '@Templates/layout';
import RegisterForm from '@Organisms/register-form';

import { withAuthRedirect } from '../utils/auth';

const Register: React.FC = () => {
  return (
    <Layout>
      <RegisterForm />
    </Layout>
  );
};

export const getServerSideProps = withAuthRedirect();

export default Register;
