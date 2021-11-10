// import { routes } from "./lib/index.js";

// window.addEventListener('load', () => {
//   routes(window.location.hash);
// });

// window.addEventListener('hashchange', () => {
//   routes(window.location.hash);
// });

//ESTO VA EN EL ARCHIVO DE JS DE TIMELINE
const postHere = document.querySelector("#toggle-button");
const createPost = document.querySelector("#create-post");
const postWall = document.querySelector(".post-wall")
postHere.addEventListener("click", () => {
  postHere.classList.toggle("active");
  createPost.classList.toggle("active");
  postWall.classList.toggle("active");
});
