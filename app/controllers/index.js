import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const possibleHands = ['rock', 'paper', 'scissors'];

const winGraph = {
  rock: {
    scissors: true,
  },
  paper: {
    rock: true,
  },
  scissors: {
    paper: true,
  },
};

// taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class IndexController extends Controller {
  @service modals;

  @tracked picked;
  @tracked housePicked;
  @tracked score = 0;

  @action
  showRules() {
    this.modals.open('rules');
  }

  get result() {
    if (this.picked === this.housePicked) {
      return 'draw';
    }

    if (winGraph[this.picked][this.housePicked]) {
      return 'win';
    }

    return 'lose';
  }

  @action
  onPicked(value) {
    this.picked = value;

    setTimeout(() => {
      this.housePicked = possibleHands[getRandomIntInclusive(0, 2)];

      if (this.result === 'win') {
        this.score++;
      }
    }, 3000);
  }

  @action
  playAgain() {
    this.picked = null;
    this.housePicked = null;
  }
}
