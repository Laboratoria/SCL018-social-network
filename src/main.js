import { authState } from './firebaseFile.js';
import { routes } from './lib/index.js';

window.addEventListener('load', () => {
  authState();
  routes(window.location.hash);
});
window.addEventListener('hashchange', () => {
  authState();
  routes(window.location.hash);
});
