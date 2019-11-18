import { Pet } from './../src/tamagotchi.js';

describe('Katya', () => {
  jest.useFakeTimers();
  let pet;

  beforeEach(function() {
    pet = new Pet("Katya");
    pet.playTimer();
    pet.sleepTimer();
    pet.feedTimer();
    // pet.feedLevel = 5;
    // pet.playLevel = 5;
    // pet.sleepLevel = 5;
    });

    afterEach(function() {
      jest.clearAllTimers();
    })

  //test 1
  test('should have a name and levels for feed, play, and sleep when it is created', () => {
    expect(pet.name).toEqual("Katya");
    expect(pet.feedLevel).toEqual(5);
    expect(pet.playLevel).toEqual(5);
    expect(pet.sleepLevel).toEqual(5);
  });
  //test 2
  test('when play is clicked, +1 to play, -1 to feed and sleep', () => {
    pet.clickPlay();
    expect(pet.feedLevel).toEqual(4);
    expect(pet.playLevel).toEqual(6);
    expect(pet.sleepLevel).toEqual(4);
  });

//test 3
  test('when sleep is clicked, +1 to sleep, -3 to feed and sleep', () => {
    pet.clickSleep();
    expect(pet.feedLevel).toEqual(2);
    expect(pet.playLevel).toEqual(2);
    expect(pet.sleepLevel).toEqual(6);
  });

//test 4
  test('when feed is clicked, +1 to feed, -1 to play and sleep', () => {
    pet.clickFeed();
    expect(pet.feedLevel).toEqual(6);
    expect(pet.playLevel).toEqual(4);
    expect(pet.sleepLevel).toEqual(4);
  });

//test 5
  test('play is reduced by 1 point every 10 seconds', () => {
    jest.advanceTimersByTime(10001);
    expect(pet.playLevel).toEqual(4);
  });

//test 6
  test('sleep is reduced by 1 point every 10 seconds', () => {
    jest.advanceTimersByTime(10001);
    expect(pet.sleepLevel).toEqual(4);
  });

//test 7
  test('feed is reduced by 1 point every 5 seconds', () => {
    jest.advanceTimersByTime(5001);
    expect(pet.feedLevel).toEqual(4);
  });


});
