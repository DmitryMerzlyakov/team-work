import { useState } from 'react';
import { CardField } from '../cardField';
import styles from './styles.module.css';

export const GameField = ({ fieldCards }) => {
  const [openCards, setOpenCards] = useState([]);
  const [oneImg, setOneImg] = useState();
  const [twoImg, setTwoImg] = useState();
  return (
    <div className={styles.gameContainer}>
      {fieldCards.map((card) => (
        <CardField key={card.value} card={card} openCards={openCards} />
      ))}
    </div>
  );
};
