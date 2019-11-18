import { Pet } from './../src/tamagotchi.js';

describe('Katya', () => {
  let pet;

  beforeEach(function() {
    pet = new Pet("Katya");
    });

  test('should have a name and levels for feed, play, and sleep when it is created', () => {
    expect(pet.name).toEqual("Katya");
    expect(pet.feedLevel).toEqual(10);
    expect(pet.playLevel).toEqual(10);
    expect(pet.sleepLevel).toEqual(10);
  });




});
