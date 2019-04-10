export default (number) => {
  const reversedNumbers = `${number}`.split('').reverse();
  const newNumbers = [];
  reversedNumbers.forEach((e, i) => {
    if (i && i % 3 === 0) {
      newNumbers.push(',');
    }
    newNumbers.push(e);
  });
  return newNumbers.reverse().join('');
};
