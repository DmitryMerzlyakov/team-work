import styles from './styles.module.css';
import win from '../../../assets/sounds/win.mp3';
import { Button } from '../button';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IGameOverWindowsProps } from './interfaces';
import { updateLastGame } from '../../../hooks/userHooks';
import { auth } from '../../../app/config/firebaseConfig';
import { formatTime } from '../../../utils/formatTime';

export const GameOverWindow = ({
  setOpen,
  gapCount,
  timeSpent,
  boardSize,
}: IGameOverWindowsProps) => {
  const winSound = new Audio(win);
  const navigate = useNavigate();

  const saveGameResults = async () => {
    try {
      const userId = auth.currentUser?.uid;
      if (!userId) return;
      console.log(
        userId,
        boardSize.toString(),
        formatTime(timeSpent),
        gapCount
      );
      await updateLastGame(
        userId,
        boardSize.toString(),
        formatTime(timeSpent),
        gapCount
      );
    } catch (error) {
      console.error('Ошибка сохранения результатов:', error);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  const onNewGame = () => {
    location.reload();
  };
  useEffect(() => {
    winSound.play();
    saveGameResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <span className={styles.statValue}>{timeSpent}</span>
          </div>

          <div className={styles.statRow}>
            <span className={styles.statLabel}>Ходов сделано: </span>
            <span className={styles.statValue}>{gapCount} ходов</span>
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
