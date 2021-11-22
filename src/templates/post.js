import { posting } from '../firebase/firebase.js';

// Aqui deberin ir los post;
export const newPost = () => {
  const containerNewPost = document.createElement('section');
  containerNewPost.className = 'feed-container';
  containerNewPost.innerHTML = `
        <section>
        <div>
        <input type='text' id='gameTitle' placeholder="¿De qué juego quieres hablar?"/>
        <textarea minlength='10' maxlength='100' rows='10' columns='55' id='gameDescription' placeholder="Escribe aquí tu post"></textarea>
        </div>
        <button class='publish'>PUBLICAR
        </button>
        </section>`;

  containerNewPost.querySelector('.publish').addEventListener('click', /* async */() => {
    /* aqui deben suceder cosas */
    const gameTitle = containerNewPost.querySelector('#gameTitle').value;
    const description = containerNewPost.querySelector('#gameDescription').value;
    posting(gameTitle, description);
    window.location.hash = '#/feed';
  });

  return containerNewPost;

// dejar root vacio con el innerthtml Y luego concatenar += el nuevo container para el cambio.
};
