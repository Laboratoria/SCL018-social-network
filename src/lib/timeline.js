import { postear, leerData } from "../firebaseFile.js";

export const timeline = () => {
  const containerTimeline = document.createElement("section");
  containerTimeline.className = "timeline-container";
  const timelineHTML = `
    <header class="header-timeline">
    <h1>CODERS</h1>
  </header>
  <section class="timeline">
    <section class="post-here-container">
      <button class="post-here-button">Publica aquí</button>
    </section>
    <section class="create-post-container">
      <section class="create-post">
        <input type="text" id="textarea-title" placeholder="Título">
        <textarea id="textarea-description" placeholder="Descripción" maxlength="150"></textarea>
        <input type="text" id="textarea-links" placeholder="Link de referencia">
        <div class="post-button-container">
          <button class="post-button">Publicar</button>
        </div>
      </section>
    </section>
    <section class="post-wall">
      <div class="container-post">
        <div class="header-post"></div>
        <div class="post-content"></div>
        <div class="reference-link"></div>
      </div>
    </section>
  </section>`;
  containerTimeline.innerHTML = timelineHTML;
  const postButton = containerTimeline.querySelector(".post-button");
  postButton.addEventListener("click", () => {
    const title = containerTimeline.getElementById("textarea-title").value;
    console.log(title);
    postear(title);
  });
  const postHere = containerTimeline.querySelector(".post-here-container");
  const postHereButton = containerTimeline.querySelector(".post-here-button");
  const createPost = containerTimeline.querySelector(".create-post");
  const postWall = containerTimeline.querySelector(".post-wall");
  const createPostContainer = containerTimeline.querySelector(".create-post-container");

  postHere.addEventListener("click", () => {
    postHere.classList.toggle("active");
    createPost.classList.toggle("active");
    postWall.classList.toggle("active");
    createPostContainer.classList.toggle("active");
    postHereButton.classList.toggle("active");
    if (postHereButton.classList.contains("active")) {
      postHereButton.textContent = "Cerrar";
    } else { postHereButton.textContent = "Publica aquí"; }
  });

  return containerTimeline;
};
