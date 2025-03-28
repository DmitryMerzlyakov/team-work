import styles from './styles.module.css';
export const CardField = ({ card, id, openCards, handleClick }) => {
  return (
    <div className={styles.card} id={id} onClick={(e) => handleClick(e)}>
      {openCards.includes(id) ? (
        <div id={id} className={styles.cardFront}>
          {' '}
          {card.value}
        </div> //позже заменб на image
      ) : (
        <div id={id} className={styles.cardBack}></div>
      )}
    </div>
  );
};
