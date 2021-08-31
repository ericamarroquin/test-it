import { Player } from "./../src/pigdice.js";

describe("Player", () => {
  
  test("should create player object", () => {
    let player = new Player();
    expect(player).toBeDefined();
  });
  
  test("should display a random number between 1 and 6", () => {
    let player = new Player();
    player.roll();
    expect(player.currentRoll).toBeGreaterThanOrEqual(1);
    expect(player.currentRoll).toBeLessThanOrEqual(6);
  });
  
  test("should create player object with start up properties", () => {
    let player = new Player();
    expect(player.tempScore).toEqual(0);
    expect(player.totalScore).toEqual(0);
    expect(player.currentPlayer).toEqual(true);
  });
    
  test("should add roll to player temp score", () => {
    let player = new Player();
    player.roll();
    player.play();
    expect(player.tempScore).toBeGreaterThanOrEqual(1);
    expect(player.tempScore).toBeLessThanOrEqual(6);
  });

  test("toggle currentPlayer to false if rolled a 1", () => {
    let player = new Player();
    player.currentRoll = 1;
    player.play();
    expect(player.currentPlayer).toEqual(false);
  });

  test("should move tempScore to totalScore", () => {
    let player = new Player();
    player.roll();
    player.play();
    player.hold();
    expect(player.totalScore).toEqual(player.tempScore);
  });
});




