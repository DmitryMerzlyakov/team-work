import { ICardFieldProps } from './interfaces';
import styles from './styles.module.css';

export const CardField = ({
  card,
  id,
  openCards,
  handleClick,
  openIdenticalCards,
  currentFieldsData,
}: ICardFieldProps) => {
  return (
    <div
      className={`${styles.card} ${styles[`cardSize${String(currentFieldsData.size)}`]}`}
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
          {currentFieldsData.type === 'numbers' ? (
            card.value
          ) : (
            <img
              src={card.icon}
              alt={`Icon ${card.value}`}
              className={styles.iconImage}
              id={id}
            />
          )}
        </div>
      ) : (
        <div id={id} className={styles.cardBack}></div>
      )}
    </div>
  );
};
