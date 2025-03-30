import styles from './styles.module.css';

interface MoveCounterProps {
  condition: number;
  countOver: boolean;
}

export const MoveCounter = ({ condition, countOver }: MoveCounterProps) => {
  return (
    <div className={styles.counter}>
      <p className={styles.counter__text}>{`Xодов:${countOver ? 0 : condition}`}</p>
    </div>
  );
};

export default MoveCounter;
