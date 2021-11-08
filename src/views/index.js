import { landingPage } from "./landing.js";
// import { createUser } from "./createUser.js";

export const routes = (hash) => {
  const landing = document.getElementById("root");
  if (hash === "#/" || hash === "/" || hash === "#" || hash === "") {
    landing.innerHTML = "";
    landing.appendChild(landingPage());
  } else if (hash === "#/landing") {
    landing.appendChild(landingPage());
  }
};
