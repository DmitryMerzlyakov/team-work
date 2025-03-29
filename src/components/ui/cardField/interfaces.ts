import { ICard, ICurrgentGameInfo } from '../../../models/interfaces';

export interface ICardFieldProps {
  card: ICard;
  id: string;
  openCards: string[];
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  openIdenticalCards: string[];
  currentFieldsData: ICurrgentGameInfo;
}
