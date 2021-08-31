import { roll } from "./../src/pigdice.js";
import { Player } from "./../src/pigdice.js";

describe("roll", () => {

  test("should display a random number between 1 and 6", () => {
    const value = roll();
    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(6);
  });
});

describe("Player", () => {
  
    test("should create player object", () => {
      let player = new Player();
      expect(player).toBeDefined();
    });

    test("should create player object with start up properties", () => {
      let player = new Player();
      expect(player.tempScore).toEqual(0);
      expect(player.totalScore).toEqual(0);
      expect(player.turn).toEqual(0);
      expect(player.rolls).toEqual(0);
      expect(player.currentPlayer).toEqual(true);
    });
    
    test("should add roll to player temp score", () => {
      let player = new Player();
      player.play();
      expect(player.tempScore).toBeGreaterThanOrEqual(1);
      expect(player.tempScore).toBeLessThanOrEqual(6);
    });
});






