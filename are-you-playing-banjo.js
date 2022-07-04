function areYouPlayingBanjo(name) {
  return new PlayingBanjo(name, 'R').isPlay;
}

class PlayingBanjo {
  constructor(name, firstLetter) {
    this.name = name;
    this.firstLetter = firstLetter;
    this.plays = 'plays banjo';
    this.doesNot = 'does not play banjo';
  }

  get isPlay() {
    return `${this.name} ${this.name.slice(0, 1).toUpperCase().includes(this.firstLetter) ? this.plays : this.doesNot}`;
  }
}

console.log(areYouPlayingBanjo('ringo'))
