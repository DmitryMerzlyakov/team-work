import { useEffect } from 'react';
import styles from './styles.module.css';
import win from '../../../assets/sounds/win.mp3';
import { FormLayout } from '../../layouts/formLayout';
import { Button } from '../button';

export const GameOverWindow = ({ setOpen }) => {
  const winSound = new Audio(win);

  const onClose = () => {
    setOpen(false);
  };

  let timeElapsed;
  let movesTaken;

  const onNewGame = () => {
    console.log('new game');
  };
  // useEffect(() => {
  //   winSound.play();
  // }, []);
  return (
    <div className={styles.gameOverScreen}>
      <div className={styles.gameOverContent}>
        <h2 className={styles.gameOverTitle}>Игра окончена!</h2>

        <div className={styles.statsSection}>
          <h3>Ваши результаты:</h3>

          <div className={styles.statRow}>
            <span className={styles.statLabel}>Затраченное время:</span>
            <span className={styles.statValue}>{timeElapsed}</span>
          </div>

          <div className={styles.statRow}>
            <span className={styles.statLabel}>Ходов сделано:</span>
            <span className={styles.statValue}>{movesTaken} ходов</span>
          </div>

          <div className={styles.scoreRow}>
            <span className={styles.scoreValue}>555 </span>
          </div>
        </div>

        <div className={styles.buttonsSection}>
          <Button>Играть заново</Button>
        </div>
      </div>
    </div>
  );
};
