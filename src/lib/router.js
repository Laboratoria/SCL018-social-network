// importar cada archivo de template hacia aca
import { feedSpace } from '../templates/nav.js';
import { templateRegister } from '../templates/signup.js';

// Efectivamente mostrar los hash
export const changeRouter = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  /* La declaración switch evalúa una expresión,
  comparando el valor de esa expresión con una instancia case,
  y ejecuta declaraciones asociadas a ese case,
  así como las declaraciones en los case que siguen. */
  switch (hash) {
    case '#/':
    case '#/login':
      containerRoot.appendChild(templateRegister());
      break;
    case '#/feed':
      containerRoot.appendChild(feedSpace());
      break;
    default:
      containerRoot.innerHTML = '<h1>tamalo</h1>';
  }
};

//generar if para cada HASH
// export const cambios = (hash) => {
//   if (hash === '#/login') {
//     return mostrarHash(hash);
//   } if (hash === '#/templateRegister') {
//     return mostrarHash(hash);
//   }
//   return mostrarHash(hash);
// };
