import { ICardFieldProps } from './interfaces';
import styles from './styles.module.css';
export const CardField = ({
  card,
  id,
  openCards,
  handleClick,
  openIdenticalCards,
  size,
}: ICardFieldProps) => {
  return (
    <div
      className={`${styles.card} ${styles[`cardSize${String(size)}`]}`}
      id={id}
      onClick={(e) => handleClick(e)}
      data-name={card.value}
    >
      {openCards.includes(id) ? (
        <div
          id={id}
          className={
            openIdenticalCards.includes(card.value)
              ? styles.open
              : styles.cardFront
          }
        >
          {' '}
          {card.value}
        </div> //позже заменб на image
      ) : (
        <div id={id} className={styles.cardBack}></div>
      )}
    </div>
  );
};
