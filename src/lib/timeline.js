import { addData } from '../firebaseFile.js';

export const timeline = () => {
  const containerTimeline = document.createElement('section');
  containerTimeline.className = 'timeline-container';
  const timelineHTML = `
    <header class="header-timeline">
    <h1>CODERS</h1>
  </header>
  <section class="timeline">
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
  </section>`;

  containerTimeline.innerHTML = timelineHTML;

  const postButton = containerTimeline.querySelector('.post-button');
  postButton.addEventListener('click', () => {
    const title = containerTimeline.querySelector('#textarea-title').value;
    const content = containerTimeline.querySelector('#textarea-description').value;
    const link = containerTimeline.querySelector('#textarea-links').value;
    addData(title, content, link);
    window.location.hash = '#/postWall';
  });

  const postHere = containerTimeline.querySelector('.post-here-container');
  const postHereButton = containerTimeline.querySelector('.post-here-button');
  const createPost = containerTimeline.querySelector('.create-post');
  // const postWall = document.querySelector(".post-wall");
  const createPostContainer = containerTimeline.querySelector('.create-post-container');


  return containerTimeline;
};
