import { useLocation } from 'react-router-dom';
import { cards } from '../../../models/constants';
import { GameField } from '../../ui/gameField';
import { shuffleAndEditSize } from '../../../utils/shuffleAndEditSize';
import { useEffect } from 'react';
import startSound from '../../../assets/sounds/begin.mp3';

export const GamePage = () => {
  const location = useLocation();
  const { state } = location;
  const beginSound = new Audio(startSound);

  useEffect(() => {
    beginSound.play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <GameField
        fieldCards={shuffleAndEditSize(cards, state.size)}
        currentFieldsData={state}
      />
    </div>
  );
};
