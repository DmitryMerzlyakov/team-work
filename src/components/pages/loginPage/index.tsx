import { useState } from 'react';
import { SignInForm, SignUpForm } from '../../widgets/forms';
import styles from './styles.module.css';

const LoginPage = () => {

  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  return (
    <div className={styles.login}>
      {isLoginForm ?
        <SignInForm changeForm={setIsLoginForm} />
        :
        <SignUpForm changeForm={setIsLoginForm} />
      }

    </div>
  );
};

export default LoginPage;
