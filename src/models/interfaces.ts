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

export interface ICard {
  value: string;
  icon: string;
}

export interface IUserSing {
  name: string;
  nickName: string;
  email: string;
  password: string;
  repeatPassword?: string;
}

export interface IUser {
  nickname: string;
  name: string;
  password: string;
  games: {
    lastGame: {
      boardSize: string | null;
      timeSpent: number | null;
      moves: number | null;
    };
    allGamesTime: Record<number, number>;
  };
}
