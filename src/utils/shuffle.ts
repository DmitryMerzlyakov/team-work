export const shuffle = (array) => {
  const newArr = [...array, ...array];
  return newArr.sort(() => Math.random() - 0.5);
};
