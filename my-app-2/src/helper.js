const winningLineUp = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

export const winnerCalculate = (cells) => {
  for (let i = 0; i < winningLineUp.length; i++) {
    const [a, b, c] = winningLineUp[i];
    console.log(cells[a]);
  }
};
