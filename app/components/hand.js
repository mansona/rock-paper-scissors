import Component from '@glimmer/component';

const colors = {
  blue: ['#2944c2', '#4464ee'],
  yellow: ['#c56923', '#eea522'],
  red: ['#a01738', '#df3253'],
};

export default class HandComponent extends Component {
  get colors() {
    return colors[this.args.color];
  }
}
