import { cards } from '../../../models/constants';
import { GameField } from '../../ui/gameField';

export const GamePage = () => {
  return (
    <div>
      <GameField fieldCards={cards} />
    </div>
  );
};
