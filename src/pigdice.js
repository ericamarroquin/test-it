export function Player() {
  this.tempScore = 0;
  this.totalScore = 0;
  this.currentPlayer = true;
  this.currentRoll = 0;
};

Player.prototype.roll = function() {
  const min = Math.ceil(1);
  const max = Math.floor(7);
  this.currentRoll = Math.floor(Math.random() * (max-min) + min);
};

Player.prototype.play = function() {
  this.tempScore += this.currentRoll;
  if (this.currentRoll === 1) {
    this.currentPlayer = false;
  }; 
};

Player.prototype.hold = function() {
this.totalScore += this.tempScore;
};