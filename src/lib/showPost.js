import { leerData } from "../firebaseFile.js";

// const dataPost = leerData();

export const showPost = (docData, timelineHTML) => {
    return `<section class="post-wall" id="post">
    <div class="container-post">
      <div class="header-post">${docData}</div>
      <div class="post-content"></div>
      <div class="reference-link"></div>
    </div>
    </section>`
    console.log(timelineHTML += showPost(docData));
   
}
