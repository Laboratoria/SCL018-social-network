import { routes } from "./views/routes.js";

import { readData } from "./firebase.js";

window.addEventListener("load", () => {
  routes(window.location.hash);
  readData();
});

window.addEventListener("hashchange", () => {
  routes(window.location.hash);
});
