import { routes } from "./lib/index.js";

window.addEventListener('load', () => {
  routes(window.location.hash);
});
window.addEventListener('hashchange', () => {
  routes(window.location.hash);
});

