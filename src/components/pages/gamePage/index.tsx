import { useLocation } from 'react-router-dom';
import { cards } from '../../../models/constants';
import { GameField } from '../../ui/gameField';
import { shuffleAndEditSize } from '../../../utils/shuffleAndEditSize';
import { useEffect } from 'react';
import startSound from '../../../assets/sounds/begin.mp3';
import { Button } from '../../ui';
import { Header } from '../../ui/header';
import styles from './styles.module.css';

export const GamePage = () => {
  const location = useLocation();
  const { state } = location;
  const beginSound = new Audio(startSound);

  useEffect(() => {
    beginSound.play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.game}>
      <Header className={styles.game__header}>
        <Button className={styles.game__header_button}>Сохранить игру</Button>
        <Button color='secondary' className={styles.game__header_button}>Новая игра</Button>
      </Header>
      <GameField
        fieldCards={shuffleAndEditSize(cards, state.size)}
        currentFieldsData={state}
      />
    </div>
  );
};
