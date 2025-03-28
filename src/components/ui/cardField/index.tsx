import styles from './styles.module.css';
export const CardField = ({ card, openCards }) => {
  return (
    <div className={styles.card}>
      {openCards.includes(card.value) ? (
        <div className={styles.cardFront}> {card.value}</div> //позже заменб на image
      ) : (
        <div className={styles.cardBack}></div>
      )}
    </div>
  );
};
