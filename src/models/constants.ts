import { IFieldData } from './interfaces';

export const fieldsData: IFieldData[] = [
  {
    id: 0,
    size: 6,
    allField: 36,
  },
  {
    id: 1,
    size: 8,
    allField: 64,
  },
  {
    id: 2,
    size: 10,
    allField: 100,
  },
];

export const cards = Array.from({ length: 50 }, (_, index) => ({
  value: (index + 1).toString(),
  icon: `/icons/icon${index + 1}.png`,
}));
