import { useState } from 'react';
import { CardField } from '../cardField';
import styles from './styles.module.css';
import { IGameFieldProps } from './interfaces';

export const GameField = ({
  fieldCards,
  currentFieldsData,
}: IGameFieldProps) => {
  const [openCards, setOpenCards] = useState<string[]>([]);
  const [openIdenticalCards, setOpenIdenticalCards] = useState<string[]>([]);
  const [oneImg, setOneImg] = useState<string | null>(null);
  const [twoImg, setTwoImg] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
          setOpenCards(openCards.slice(0, openCards.length - 1));

          setOneImg(null);
          setTwoImg(null);
        }, 1000);
      } else if (oneImg === cardName) {
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
