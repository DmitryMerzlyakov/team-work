import { Outlet } from 'react-router-dom';

import styles from './styles.module.css';
import { Header } from '../../ui/header';
import { Button } from '../../ui';

export const GameLayout = () => {
  return (
    <div className={styles.gameLayout}>
      <Header className={styles.gameLayout__header}>
        <Button className={styles.gameLayout__header_button}>Выйти</Button>
        <Button color='secondary' className={styles.gameLayout__header_button}>Новая игра</Button>
      </Header>
      <div className={styles.gameLayout__body}>
        <Outlet />
      </div>
    </div >
  );
};
