import { leerData } from "../firebaseFile.js";

const dataPost = leerData();

export const showPost = (posts) => {
    return `<section class="post-wall" id="post">
    <div class="container-post">
      <div class="header-post">${posts[0].titulo}</div>
      <div class="post-content"></div>
      <div class="reference-link"></div>
    </div>
    </section>`
}