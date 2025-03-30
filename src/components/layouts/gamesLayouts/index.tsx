import { Outlet } from 'react-router-dom';

import styles from './styles.module.css';


export const GameLayout = () => {
  return (
    <div className={styles.gameLayout}>
      <Outlet />
    </div >
  );
};
