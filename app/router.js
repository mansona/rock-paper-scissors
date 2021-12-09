import EmberRouter from '@ember/routing/router';
import config from 'rock-paper-scissors-master/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
