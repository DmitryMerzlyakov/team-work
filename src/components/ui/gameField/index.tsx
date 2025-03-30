import { useEffect, useState } from 'react';
import { CardField } from '../cardField';
import styles from './styles.module.css';
import { IGameFieldProps } from './interfaces';
import cardOpenSound from '../../../assets/sounds/card-open.mp3';
import cardErrorSound from '../../../assets/sounds/card-error.mp3';
import cardsuccessSound from '../../../assets/sounds/click-success.mp3';
import { GameOverWindow } from '../gameOverWindow.tsx';
import classNames from 'classnames';
import { MoveCounter, Timer } from '../index.ts';

export const GameField = ({
  fieldCards,
  currentFieldsData,
}: IGameFieldProps) => {
  const [openCards, setOpenCards] = useState<string[]>([]);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [openGameOverWindow, setOpenGameOverWindow] = useState<boolean>(false);
  const [openIdenticalCards, setOpenIdenticalCards] = useState<string[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [oneImg, setOneImg] = useState<string | null>(null);
  const [twoImg, setTwoImg] = useState<string | null>(null);

  const openSound = new Audio(cardOpenSound);
  const errorSound = new Audio(cardErrorSound);
  const successSound = new Audio(cardsuccessSound);

  useEffect(() => {
    if (openIdenticalCards.length * 2 === fieldCards.length) {
      setOpenGameOverWindow(true);
      setStartGame(false);
    }
  }, [openIdenticalCards]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    openSound.play();
    if (startGame === false) setStartGame(true);
    const cardName = (
      (e.target as Element)?.closest('[data-name]') as HTMLElement
    )?.dataset.name as string;
    const cardId = (e.target as Element).id;

    if (openCards.includes(cardId)) {
      return;
    }
    openSound.play();
    setMoves((prev) => prev + 1);
    setOpenCards((prev) => [...prev, cardId]);

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
    <div className={styles.wrapper}>
      <div
        className={classNames(
          styles.gameContainer,
          styles[`containerSize${String(currentFieldsData.size)}`]
        )}
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
        {openGameOverWindow && (
          <GameOverWindow setOpen={setOpenGameOverWindow} gapCount={moves} />
        )}
      </div>
      <div className={styles.footer}>
        <MoveCounter condition={moves} countOver={openGameOverWindow} />
        <Timer startTimer={startGame} stopTimer={openGameOverWindow} />
      </div>
    </div>
  );
};
