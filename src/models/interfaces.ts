export interface IFieldData {
  id: number;
  size: number;
  allField: number;
}

type TCurrentGameCards = 'numbers' | 'icons';

export interface ICurrgentGameInfo {
  type: TCurrentGameCards;
  size: number;
}
