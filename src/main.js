import { routes } from "./views/routes.js";
import { observer } from "./firebase.js";

window.addEventListener("load", () => {
  routes(window.location.hash);
  observer();
});

window.addEventListener("hashchange", () => {
  routes(window.location.hash);
  observer();
});
