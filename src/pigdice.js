export function roll() {
  const min = Math.ceil(1);
  const max = Math.floor(7);
  return Math.floor(Math.random() * (max-min) + min);
};

export function Player() {
  this.tempScore = 0;
  this.totalScore = 0;
  this.turn = 0;
  this.rolls = 0;
  this.currentPlayer = true;
};