export const shuffleAndEditSize = (array, size) => {
  let newArr = array;

  if (size === 6) {
    newArr = array.slice(0, 18);
  } else if (size === 8) {
    newArr = array.slice(0, 32);
  }

  const shuffledArr = [...newArr, ...newArr].sort(() => Math.random() - 0.5);

  return shuffledArr;
};
