import styles from './styles.module.css';
export const CardField = ({
  card,
  id,
  openCards,
  handleClick,
  openIdenticalCards,
  size,
}) => {
  return (
    <div
      className={`${styles.card} ${styles[`cardSize${String(size)}`]}`}
      id={id}
      onClick={(e) => handleClick(e)}
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
        <div data-name={card.value} id={id} className={styles.cardBack}></div>
      )}
    </div>
  );
};
