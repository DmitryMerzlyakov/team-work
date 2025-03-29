import { IFieldData } from '../../../models/interfaces';

export interface ICardFieldProps {
  card: { value: string };
  id: string;
  openCards: string[];
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  openIdenticalCards: string[];
  currentFieldsData: IFieldData;
}
