import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @service modals;

  @action
  showRules() {
    this.modals.open('rules');
  }
}
