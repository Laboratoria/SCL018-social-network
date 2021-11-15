import { postear, leerData } from "../firebaseFile.js";



export const showPost = (docData) => {
  return `<section class="post-wall" id="post">
  <div class="container-post">
    <div class="header-post">${docData[0]}</div>
    <div class="post-content"></div>
    <div class="reference-link"></div>
  </div>
  </section>`;
};

export const timeline = () => {
  const containerTimeline = document.createElement("section");
  containerTimeline.className = "timeline-container";
  let timelineHTML = `
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
    </section>`

  containerTimeline.innerHTML = timelineHTML;
  const postButton = containerTimeline.querySelector(".post-button");
  postButton.addEventListener("click", () => {
    const title = containerTimeline.querySelector("#textarea-title").value;
    postear(title);
    const docData = leerData();
    docData.forEach(post => {
      console.log(post);
    });
    
    console.log(timelineHTML += showPost(docData));

  });

  const postHere = containerTimeline.querySelector(".post-here-container");
  const postHereButton = containerTimeline.querySelector(".post-here-button");
  const createPost = containerTimeline.querySelector(".create-post");
  const postWall = containerTimeline.querySelector(".post-wall");
  const createPostContainer = containerTimeline.querySelector(".create-post-container");

  postHere.addEventListener("click", () => {
    postHere.classList.toggle("active");
    createPost.classList.toggle("active");
    // postWall.classList.toggle("active");
    createPostContainer.classList.toggle("active");
    postHereButton.classList.toggle("active");
    if (postHereButton.classList.contains("active")) {
      postHereButton.textContent = "Cerrar";
    } else { postHereButton.textContent = "Publica aquí"; }
  });

  return containerTimeline;
};

