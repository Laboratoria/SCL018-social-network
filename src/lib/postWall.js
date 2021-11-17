import { showPost } from './showPost.js';
import { signOutUser } from '../firebaseFile.js';

export const postWall = () => {
  const mainContainer = document.createElement('section');
  mainContainer.className = 'main-container';
  const containerLogout = document.createElement('section');
  containerLogout.className = 'container-logout';
  const containerPostWall = document.createElement('section');
  containerPostWall.className = 'post-wall';
  containerPostWall.id = 'post';
  const templateSignOut = `
  <header class="header-timeline">
  <h1>CODERS</h1>
    <button class="logout-btn">Cerrar sesión</button>
  </header>
  <div class="post-here">
    <button class="post-here-button">Publicar aquí</button>
  </div>
  `;
  containerLogout.innerHTML = templateSignOut;
  mainContainer.appendChild(containerLogout);
  mainContainer.appendChild(containerPostWall);
  showPost();
  const logOut = containerLogout.querySelector('.logout-btn');
  logOut.addEventListener('click', () => {
    signOutUser();
  });

  return mainContainer;
};
