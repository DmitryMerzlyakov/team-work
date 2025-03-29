import { useEffect, useState } from 'react';
import { CardField } from '../cardField';
import styles from './styles.module.css';

export const GameField = ({ fieldCards, currentFieldsData }) => {
  const [openCards, setOpenCards] = useState([]);
  const [openIdenticalCards, setOpenIdenticalCards] = useState([]);
  const [oneImg, setOneImg] = useState();
  const [twoImg, setTwoImg] = useState();

  console.log(String(currentFieldsData.size));

  const handleClick = (e) => {
    console.log(e.target.dataset.name);
    setOpenCards((prev) => [...prev, e.target.id]);

    if (!oneImg && !twoImg) {
      setOneImg(e.target.dataset.name);
    } else if (oneImg && !twoImg) {
      setTwoImg(e.target.dataset.name);
      if (oneImg !== e.target.dataset.name) {
        setTimeout(() => {
          setOpenCards(openCards.slice(0, openCards.length - 1));

          setOneImg(null);
          setTwoImg(null);
        }, 1000);
      } else if (oneImg === e.target.dataset.name) {
        setOpenIdenticalCards((prev) => [...prev, oneImg]);
        setOneImg(null);
        setTwoImg(null);
      }
    }
  };
  return (
    <div
      className={`${styles.gameContainer} ${styles[`containerSize${String(currentFieldsData.size)}`]}`}
    >
      {fieldCards.map((card, index) => (
        <CardField
          key={index}
          id={index.toString()}
          card={card}
          openCards={openCards}
          handleClick={handleClick}
          openIdenticalCards={openIdenticalCards}
          size={currentFieldsData.size}
        />
      ))}
    </div>
  );
};
