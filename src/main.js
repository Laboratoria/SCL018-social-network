// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
// import {
//   clickGoogle,
//   clickRegister,
//   clickSignin,
//   templateRegister,
// } from './templates/signup.js';
import { changeRouter } from './lib/router.js';

const init = () => {
  // aqui hay que cargar algo antes de cambiar las cosas
  // document.getElementById('root').innerHTML = templateRegister();
  // clickRegister();
  // clickGoogle();
  // clickSignin();

  window.location.hash = '#/login';
};
window.addEventListener('hashchange', () => {
  changeRouter(window.location.hash);
});

window.addEventListener('load', init);
