// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { templateRegister } from './templates/signup.js';
import { cambios } from './router.js';

const init = () => {
// aqui hay que cargar algo antes de cambiar las cosas
  document.getElementById('root').innerHTML = templateRegister();

  // aca abajo cambiamos las cosas
  window.addEventListener('hashchange', () => {
    myFunction();
    console.log(window.location.hash);
    cambios(window.location.hash);
  });
};

window.addEventListener('load', init);
