/* eslint-disable indent */
import { login } from './login.js';
import { createUser } from './createUser.js';
import { timeline } from './timeline.js';
import { postWall } from './postWall.js';

export const routes = (hash) => {
  const mainContent = document.getElementById('root');
  mainContent.innerHTML = '';
  if (hash === '#/' || hash === '/' || hash === '#' || hash === '') {
    mainContent.appendChild(login());
  } else if (hash === '#/login') {
    mainContent.appendChild(login());
  } else if (hash === '#/createUser') {
    mainContent.appendChild(createUser());
  } else if (hash === '#/timeline') {
    mainContent.appendChild(timeline());
  } else if (hash === '#/postWall') {
    mainContent.appendChild(postWall());
  }
};
