import styles from './styles.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IUserSing } from '../../../../models/interfaces';
import { Input } from '../../../ui/input';
import { Button } from '../../../ui';
import { registerUser } from '../../../../hooks/authHooks';
import { addUserToDatabase } from '../../../../hooks/userHooks';
import { links } from '../../../../app/config';
import { useNavigate } from 'react-router-dom';

interface SignUpFormProps {
  changeForm: (value: boolean) => void;
}

export const SignUpForm = ({ changeForm }: SignUpFormProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserSing>();

  const userRegister = async (data: IUserSing) => {
    try {
      const user = await registerUser(data.email, data.password);
      console.log(user);
      await addUserToDatabase(
        user.uid,
        data.nickName,
        data.name,
        data.password
      );
      navigate(links.main);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit: SubmitHandler<IUserSing> = (data) => {
    userRegister(data);
  };

  return (
    <form className={styles.signup} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.signup__fields}>
        <Input
          label="Введите Ваш email"
          inputPlaceholder="Email"
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
          label="Введите Ваше имя"
          inputPlaceholder="Имя"
          {...register('name', {
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
              value: /^[a-zA-ZА-Яа-яЁё]+$/,
              message: 'Имя не может содержать цифры и другие спец. символы',
            },
          })}
          hint={`${errors.name ? errors.name?.message : ''}`}
        />
        <Input
          label="Введите Ваш никнейм"
          inputPlaceholder="Никнейм"
          {...register('nickName', {
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
          hint={`${errors.nickName ? errors.nickName?.message : ''}`}
        />
        <Input
          label="Введите Ваш пароль"
          inputPlaceholder="Пароль"
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
        <Input
          label="Повторите Ваш пароль"
          inputPlaceholder="Ещё раз пароль"
          {...register('repeatPassword', {
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
          hint={`${errors.repeatPassword ? errors.repeatPassword?.message : ''}`}
        />
      </div>
      <Button type="submit">Зарегистрироваться</Button>
      <Button onClick={() => changeForm(true)}>У меня уже есть аккаунт</Button>
    </form>
  );
};
