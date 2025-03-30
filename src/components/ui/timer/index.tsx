import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { formatTime } from '../../../utils/formatTime';

interface ITimerProps {
  startTimer: boolean;
  onTimeUpdate?: (time: number) => void;
}

export const Timer = ({ startTimer, onTimeUpdate }: ITimerProps) => {
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (startTimer && !isActive) {
      setIsActive(true);
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;
          onTimeUpdate?.(newTime);
          return newTime;
        });
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

  return (
    <div className={styles.timer}>
      <p className={styles.timer__text}>Таймер: {formatTime(time)}</p>
    </div>
  );
};
