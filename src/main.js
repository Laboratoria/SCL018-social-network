// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { changeRoute } from './lib/router.js';

myFunction();
const init = () => {
  window.location.hash = '#/';
  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
  });
};

window.addEventListener('load', init);
