import Component from '@glimmer/component';
import { action } from '@ember/object';

const colors = {
  paper: ['#2944c2', '#4464ee'],
  scissors: ['#c56923', '#eea522'],
  rock: ['#a01738', '#df3253'],
  lizard: ['#6036ac', '#895ce6'],
  spock: ['#2c8fac', '#4bbcd0'],
};

export default class HandComponent extends Component {
  get colors() {
    return colors[this.args.pick];
  }

  @action
  onClick() {
    this.args.onPicked?.(this.args.pick);
  }
}
