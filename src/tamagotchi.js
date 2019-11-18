export class Pet {
  constructor(name) {
    this.name = name;
    this.feedLevel = 5;
    this.playLevel = 5;
    this.sleepLevel = 5;
  }

  clickPlay() {
    if (this.playLevel < 10) {
      this.feedLevel -= 1;
      this.playLevel += 1;
      this.sleepLevel -= 1;
    };
  }

  clickSleep() {
    if (this.sleepLevel < 10) {
      this.feedLevel -= 3;
      this.playLevel -= 3;
      this.sleepLevel += 1;
    };
  }

  clickFeed() {
    if (this.feedLevel < 10) {
      this.feedLevel += 1;
      this.playLevel -= 1;
      this.sleepLevel -= 1;
    };
  }

  playTimer() {
    setInterval( () => {
      this.playLevel--;
    }, 10000);
  };

  sleepTimer() {
    setInterval( () => {
      this.sleepLevel--;
    }, 10000);
  };

  feedTimer() {
    setInterval( () => {
      this.feedLevel--;
    }, 5000);
  };

}
