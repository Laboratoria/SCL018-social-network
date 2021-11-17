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
    <button class="close-btn">Cerrar</button>
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
  const closeBtn = containerTimeline.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    window.location.hash = '#/postWall';
  });
  const postButton = containerTimeline.querySelector('.post-button');
  postButton.addEventListener('click', () => {
    const title = containerTimeline.querySelector('#textarea-title').value;
    const content = containerTimeline.querySelector('#textarea-description').value;
    const link = containerTimeline.querySelector('#textarea-links').value;
    if (title === '' || content === '') {
      alert('No puedes publicar contenido vacío, imbécil');
    } else {
      addData(title, content, link);
      window.location.hash = '#/postWall';
    }
  });
  return containerTimeline;
};
