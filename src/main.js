// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { templateRegister } from './templates/register.js';

myFunction();

document.getElementById('root').innerHTML = templateRegister();
