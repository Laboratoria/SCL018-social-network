import { posting } from '../firebase/firebase.js';

// Aqui deberin ir los post;
export const newPost = () => {
  const containerNewPost = document.createElement('section');
  containerNewPost.className = 'feed-container';
  containerNewPost.innerHTML = `
        <section class='newpost' >
        <input type='text' class='gameTitle' placeholder="Nombre del juego"/>
        <textarea minlength='10' maxlength='1000' rows='10' columns='55' class='gameDescription' placeholder="Escribe aquí tu post"></textarea>
        <button id='publish'>PUBLICAR
        </button>
        </section>`;

  containerNewPost.querySelector('#publish').addEventListener('click', /* async */() => {
    /* aqui deben suceder cosas */
    const gameTitle = containerNewPost.querySelector('.gameTitle').value;
    const description = containerNewPost.querySelector('.gameDescription').value;
    posting(gameTitle, description);
    window.location.hash = '#/feed';
  });

  return containerNewPost;

// dejar root vacio con el innerthtml Y luego concatenar += el nuevo container para el cambio.
};
