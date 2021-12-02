// Este es el punto de entrada de tu aplicacion

import { changeRouter } from './lib/router.js';
import { observer } from './firebase/firebase.js';

const init = () => {
  // aqui hay que cargar algo antes de cambiar las cosas
  // document.getElementById('root').innerHTML = templateRegister();
  // clickRegister();
  // clickGoogle();
  // clickSignin();
  // observer();
  window.location.hash = '#/login';
};
window.addEventListener('hashchange', () => {
  observer();
  changeRouter(window.location.hash);
});

window.addEventListener('load', init);
