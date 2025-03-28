import { useEffect, useState } from 'react';
import { CardField } from '../cardField';
import styles from './styles.module.css';
import { shuffle } from '../../../utils/shuffle';

export const GameField = ({ fieldCards }) => {
  const [gameCards, setGameCards] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [oneImg, setOneImg] = useState();
  const [twoImg, setTwoImg] = useState();

  useEffect(() => {
    setGameCards(shuffle(fieldCards));
  }, []);

  const handleClick = (e) => {
    console.log(e.target);
    setOpenCards((prev) => [...prev, e.target.id]);

    if (!oneImg && !twoImg) {
      setOneImg(e.target.id);
    } else if (oneImg && !twoImg) {
      setTwoImg(e.target.id);
      if (oneImg !== e.target.id) {
        setTimeout(() => {
          setOpenCards(openCards.slice(0, openCards.length - 1));
          setOneImg(null);
          setTwoImg(null);
        }, 1000);
      } else if (oneImg === e.target.id) {
        setOneImg(null);
        setTwoImg(null);
      }
    }
  };
  return (
    <div className={styles.gameContainer}>
      {gameCards.map((card, index) => (
        <CardField
          key={index}
          id={index.toString()}
          card={card}
          openCards={openCards}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
