import styles from './styles.module.css';
import win from '../../../assets/sounds/win.mp3';
import { Button } from '../button';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IGameOverWindowsProps } from './interfaces';

export const GameOverWindow = ({
  setOpen,
  gapCount,
}: IGameOverWindowsProps) => {
  const winSound = new Audio(win);
  const navigate = useNavigate();

  const onClose = () => {
    setOpen(false);
  };

  let timeElapsed;

  const onNewGame = () => {
    location.reload();
  };
  useEffect(() => {
    winSound.play();
  }, []);
  return (
    <div className={styles.gameOverScreen}>
      <div className={styles.gameOverContent}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Закрыть окно"
        >
          ×
        </button>
        <h2 className={styles.gameOverTitle}>Игра окончена!</h2>

        <div className={styles.statsSection}>
          <h3>Ваши результаты:</h3>

          <div className={styles.statRow}>
            <span className={styles.statLabel}>Затраченное время:</span>
            <span className={styles.statValue}>{timeElapsed}</span>
          </div>

          <div className={styles.statRow}>
            <span className={styles.statLabel}>Ходов сделано: </span>
            <span className={styles.statValue}>{gapCount} ходов</span>
          </div>

          <div className={styles.scoreRow}>
            <span className={styles.scoreValue}>555 </span>
          </div>
        </div>

        <div className={styles.buttonsSection}>
          <Button onClick={onNewGame}>Играть заново</Button>
          <Button
            onClick={() => {
              navigate('/');
            }}
            color="secondary"
          >
            На главную
          </Button>
        </div>
      </div>
    </div>
  );
};
