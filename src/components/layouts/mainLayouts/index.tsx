import { Outlet } from 'react-router-dom';

import styles from './styles.module.css';

export const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <div className={styles.mainLayout__body}>
        <Outlet />
      </div>
    </div>
  );
};
