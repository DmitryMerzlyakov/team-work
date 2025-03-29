import classNames from 'classnames';
import styles from './styles.module.css';

export type ButtonSize = 'hard' | 'medium' | 'small'
export type ButtonColor = 'primary' | 'selection' | 'secondary';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  /**
   * Additional class names to apply to the button
   */
  className?: string;
  /**
   * Defines the button color
   */
  color?: ButtonColor;
  /**
   * If `true`, the button will be disabled
   */
  disabled?: boolean;
  /**
   * Component id
   * */
  id?: string;
  /**
   * The size of the button
   */
  size?: ButtonSize;
}

export const Button = ({
  children,
  className,
  color = 'primary',
  disabled = false,
  id,
  onClick,
  size = 'medium',
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[`button__${color}`],
        styles[`button__${size}`],
        className
      )}
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
