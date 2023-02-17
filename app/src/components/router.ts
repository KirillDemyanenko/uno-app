import { createPage } from './helpers/helpers';
import { openRulesPage } from './rules-page/rules-page';
import { showChoiceContainer } from './main-page/main-page';
import { language } from './local-storage';
class Router {
  static url: URL;

  static initialize(): void {
    Router.url = new URL(window.location.href);
    switch (Router.url.hash) {
      case '': {
        Router.setState('home');
        break;
      }
      case '#home': {
        Router.setState('home');
        break;
      }
      case '#rules': {
        Router.setState('rules');
        break;
      }
      case '#single-player': {
        Router.setState('single-player');
        break;
      }
      default: {
        Router.setState('404');
        break;
      }
    }
    Router.checkPage();
  }

  static setState(state: string) {
    Router.url.hash = state;
    window.history.pushState(state, '', Router.url.hash);
  }

  static checkPage() {
    switch (window.history.state) {
      case 'home': {
        document.body.innerHTML = '';
        createPage(language.chosen);
        break;
      }
      case 'rules': {
        createPage(language.chosen);
        openRulesPage(language.chosen);
        break;
      }
      case 'single-player': {
        createPage(language.chosen);
        showChoiceContainer(language.chosen);
        break;
      }
      case 'multiplayer': {
        break;
      }
      case '404': {
        createPage(language.chosen);
        break;
      }
      default: {
        Router.setState('404');
        Router.checkPage();
        break;
      }
    }
  }
}

export default Router;
