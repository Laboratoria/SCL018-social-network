import { landingPage } from "./landing.js";
import { register } from "./register.js";
export const routes = (hash) => {
  const rootContainer = document.getElementById("root");
  rootContainer.innerHTML = "";
  if (hash === "#/" || hash === "/" || hash === "" || hash === "#") {
    rootContainer.innerHTML = landingPage();
  } else if (hash === "#/home") {
    rootContainer.innerHTML = landingPage();
  } else if (hash === "#/registerPage") {
    rootContainer.innerHTML = register();
  }
};
