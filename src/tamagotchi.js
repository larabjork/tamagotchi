export class Pet {
  constructor(name) {
    this.name = name;
    this.feedLevel = 5;
    this.playLevel = 5;
    this.sleepLevel = 5;
  }

  resetNegative() {
    if (this.feedLevel < 0) {
      this.feedLevel = 0;
    }
    if (this.playLevel < 0) {
      this.playLevel = 0;
    }
    if (this.sleepLevel < 0) {
      this.sleepLevel = 0;
    }
  }

  clickPlay() {
    if (this.playLevel < 10) {
      this.feedLevel -= 1;
      this.playLevel += 3;
      this.sleepLevel -= 1;
      this.resetNegative();
    }
  }

  clickSleep() {
    if (this.sleepLevel < 10) {
      this.feedLevel -= 3;
      this.playLevel -= 3;
      this.sleepLevel += 3;
      this.resetNegative();
    }
  }

  clickFeed() {
    if (this.feedLevel < 10) {
      this.feedLevel += 3;
      this.playLevel -= 1;
      this.sleepLevel -= 1;
      this.resetNegative();
    }
  }

  playTimer() {
    setInterval( () => {
      this.playLevel--;
      this.resetNegative();
    }, 10000);
  }

  sleepTimer() {
    setInterval( () => {
      this.sleepLevel--;
      this.resetNegative();
    }, 10000);
  }

  feedTimer() {
    setInterval( () => {
      this.feedLevel--;
      this.resetNegative();
    }, 5000);
  }

  gameStatus() {
    if(this.feedLevel === 0 && this.playLevel === 0 && this.sleepLevel === 0) {
      return false;
    } else {
      return true;
    }
  }

}
