import { Pet } from './../src/tamagotchi.js';

describe('Katya', () => {
  let pet;

  beforeEach(function() {
    pet = new Pet("Katya");
    });

  test('should have a name and levels for feed, play, and sleep when it is created', () => {
    expect(pet.name).toEqual("Katya");
    expect(pet.feedLevel).toEqual(5);
    expect(pet.playLevel).toEqual(5);
    expect(pet.sleepLevel).toEqual(5);
  });

  test('when play is clicked, +1 to play, -1 to feed and sleep', () => {
    pet.clickPlay();
    expect(pet.feedLevel).toEqual(4);
    expect(pet.playLevel).toEqual(6);
    expect(pet.sleepLevel).toEqual(4);

  });




});
