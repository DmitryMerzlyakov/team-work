import { db } from '../app/config/firebaseConfig';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

export const addUserToDatabase = async (
  userId: string,
  nickname: string,
  name: string,
  password: string
) => {
  const userRef = doc(db, 'users', userId);
  await setDoc(userRef, {
    nickname,
    name,
    password,
    games: {
      lastGame: null,
      allGamesTime: {},
    },
  });
};

export const getUserFromDatabase = async (userId: string) => {
  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);
  if (userDoc.exists()) {
    return userDoc.data();
  } else {
    throw new Error('Пользователь не найден');
  }
};

export const updateLastGame = async (
  userId: string,
  boardSize: string,
  timeSpent: number,
  moves: number
) => {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, {
    'games.lastGame': { boardSize, timeSpent, moves },
  });
};

export const addGameTime = async (
  userId: string,
  gameId: number,
  timeSpent: number
) => {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, {
    [`games.allGamesTime.${gameId}`]: timeSpent,
  });
};
