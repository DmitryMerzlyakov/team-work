import { useLocation } from 'react-router-dom';
import { cards } from '../../../models/constants';
import { GameField } from '../../ui/gameField';
import { shuffleAndEditSize } from '../../../utils/shuffleAndEditSize';

export const GamePage = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <GameField
        fieldCards={shuffleAndEditSize(cards, state.size)}
        currentFieldsData={state}
      />
    </div>
  );
};
