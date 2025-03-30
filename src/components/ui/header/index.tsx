import classNames from 'classnames';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { getUserFromDatabase } from '../../../hooks/userHooks';

interface IHeaderProps {
  /**
   * Additional class names to apply to the header
   */
  className?: string;
  /**
   * Header children
   */
  children: React.ReactNode;
}

export const Header = ({ className, children }: IHeaderProps) => {

  const userId = localStorage.getItem('userId') || '';

  const [userNickName, setUserNickName] = useState<string>('');

  const loadUserData = async () => {
    try {
      const data = await getUserFromDatabase(userId.replace(/"/g, ''));
      setUserNickName(data.nickname);
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
  };

  useEffect(() => {
    loadUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  return (
    <div className={classNames(styles.header, className)}>
      <p className={styles.header__user}>{userNickName}</p>
      <div className={styles.header__children}>
        {children}
      </div>
    </div>
  )
}
