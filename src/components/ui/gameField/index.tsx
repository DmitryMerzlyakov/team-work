import { useState } from 'react';
import { CardField } from '../cardField';
import styles from './styles.module.css';
import { IGameFieldProps } from './interfaces';
import cardOpenSound from '../../../assets/sounds/card-open.mp3';
import cardErrorSound from '../../../assets/sounds/card-error.mp3';
import cardsuccessSound from '../../../assets/sounds/click-success.mp3';

export const GameField = ({
  fieldCards,
  currentFieldsData,
}: IGameFieldProps) => {
  const [openCards, setOpenCards] = useState<string[]>([]);
  const [openIdenticalCards, setOpenIdenticalCards] = useState<string[]>([]);
  const [oneImg, setOneImg] = useState<string | null>(null);
  const [twoImg, setTwoImg] = useState<string | null>(null);

  const openSound = new Audio(cardOpenSound);
  const errorSound = new Audio(cardErrorSound);
  const successSound = new Audio(cardsuccessSound);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    openSound.play();
    const cardName = (
      (e.target as Element)?.closest('[data-name]') as HTMLElement
    )?.dataset.name as string;
    setOpenCards((prev) => [...prev, (e.target as Element).id]);

    if (!oneImg && !twoImg) {
      setOneImg(cardName);
    } else if (oneImg && !twoImg) {
      setTwoImg(cardName);
      if (oneImg !== cardName) {
        setTimeout(() => {
          errorSound.play();
          setOpenCards(openCards.slice(0, openCards.length - 1));

          setOneImg(null);
          setTwoImg(null);
        }, 500);
      } else if (oneImg === cardName) {
        successSound.play();
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
          currentFieldsData={currentFieldsData}
        />
      ))}
    </div>
  );
};
