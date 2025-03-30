import styles from './styles.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IUserSing } from '../../../../models/interfaces';
import { Input } from '../../../ui/input';
import { Button } from '../../../ui';
import { loginUser } from '../../../../hooks/authHooks';
import { useNavigate } from 'react-router-dom';
import { links } from '../../../../app/config';

export interface IUserSingIn extends Partial<IUserSing> {
  email: string;
  password: string;
}

interface SignInFormProps {
  changeForm: (value: boolean) => void;
}

export const SignInForm = ({ changeForm }: SignInFormProps) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<IUserSing>();

  const handleLogin = async (data: IUserSingIn) => {
    try {
      const user = await loginUser(data.email, data.password);
      localStorage.setItem("userId", JSON.stringify(user.uid))
      navigate(links.main)
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
  };

  const onSubmit: SubmitHandler<IUserSingIn> = (data) => {
    handleLogin(data)
  };

  return (
    <form className={styles.signin} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.signin__fields}>
        <Input
          label='Введите Ваш email'
          inputPlaceholder='Email'
          {...register('email', {
            required: 'Поле email обязательно для заполнения',
            maxLength: {
              value: 20,
              message: 'Максимальная длинна 20 символов',
            },
            minLength: {
              value: 3,
              message: 'Минимальная длинна 3 символа',
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Введите корректный email-адрес',
            },
          })}
          hint={`${errors.email ? errors.email?.message : ''}`}
        />
        <Input
          label='Введите Ваш пароль'
          inputPlaceholder='Пароль'
          {...register('password', {
            required: 'Поле email обязательно для заполнения',
            minLength: {
              value: 3,
              message: 'Минимальная длинна 3 символа',
            },
            maxLength: {
              value: 20,
              message: 'Максимальная длинна 20 символов',
            },
          })}
          hint={`${errors.password ? errors.password?.message : ''}`}
        />
      </div>
      <Button type='submit'>Войти</Button>
      <Button onClick={() => changeForm(false)}>Зарегистрироваться</Button>
    </form>
  );
};
