import { loginUser } from '../views/login.js';
import { registerUser } from '../views/register.js';
import { home } from '../views/home.js';

export const changeRoute = (hash) => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  switch (hash) {
    case '#/':
    case '#/login':
      root.appendChild(loginUser());
      break;
    case '#/register':
      root.appendChild(registerUser());
      break;
    case '#/home':
      root.appendChild(home());
      break;
    default:
      alert('fallaste!');
  }
};
