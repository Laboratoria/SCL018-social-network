//import { routes } from "./paths.js";
import { register } from "./views/register.js";
import { landingPage } from "./views/landing.js";

window.addEventListener("load", () => {
  landingPage();
  routes(window.location.hash);
});

window.addEventListener("hashchange", () => {
  register();
  routes(window.location.hash);
});
