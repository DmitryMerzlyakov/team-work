import { SubmitHandler, useForm } from 'react-hook-form';
import { ICurrgentGameInfo, IFieldData } from '../../../../models/interfaces';
import { Button } from '../../../ui';
import styles from './styles.module.css';
import classNames from 'classnames';

interface IStartGameFormProps {
  fields: IFieldData[];
  onStart: (data: ICurrgentGameInfo) => void
}

export const StartGameForm = ({ fields, onStart }: IStartGameFormProps) => {

  const { setValue, watch, handleSubmit } = useForm<ICurrgentGameInfo>({
    defaultValues: {
      type: 'numbers',
      size: 6
    }
  });

  const onSubmit: SubmitHandler<ICurrgentGameInfo> = (data) => {
    onStart(data)
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.form__wrapper}>
        <div className={styles.form__item}>
          <p className={styles.form__item_text}> Выбрать стиль </p>
          <div className={styles.form__item_buttons}>
            <Button
              color='secondary'
              className={classNames(watch('type') === 'numbers' && styles.form__item_buttons_active)}
              onClick={() => setValue('type', 'numbers')}
            >
              Номера
            </Button>
            <Button
              color='secondary'
              className={classNames(watch('type') === 'icons' && styles.form__item_buttons_active)}
              onClick={() => setValue('type', 'icons')}
            >
              Иконки
            </Button>
          </div>
        </div>
        <div className={styles.form__item}>
          <p className={styles.form__item_text}> Размер игрового поля </p>
          <div className={styles.form__item_buttons}>
            {fields.map(field =>
              <Button
                key={field.id}
                color='secondary'
                className={classNames(watch('size') === field.size && styles.form__item_buttons_active)}
                onClick={() => setValue('size', field.size)}
              >
                {field.size} на {field.size}
              </Button>
            )}
          </div>
        </div>
      </div>

      <Button type='submit'>Начать игру!</Button>
    </form>
  )
}
