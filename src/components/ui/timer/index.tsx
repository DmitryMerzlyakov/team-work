import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

interface TimerProps {
  startTimer: boolean; // Условие для запуска таймера
}

export const Timer: React.FC<TimerProps> = ({ startTimer }) => {
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (startTimer && !isActive) {
      setIsActive(true);
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    if (!startTimer) {
      setIsActive(false);
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTimer]);

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className={styles.timer}>
      <p className={styles.timer__text}>Таймер: {formatTime(time)}</p>
    </div>
  );
};
