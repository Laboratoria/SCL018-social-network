import { posting, signOutUser, observer } from '../firebase/firebase.js';

// Aqui deberin ir los post;
export const newPost = () => {
  const containerNewPost = document.createElement('section');
  containerNewPost.className = 'feed-container';
  containerNewPost.innerHTML = `
  <nav class='navbar' id='navbar'>
  <a href="#/feed">INICIO</a> <img class='icon' src="https://img.icons8.com/office/50/000000/home--v2.png"/>
  <a href="#/newPost">NUEVA PUBLICACIÓN</a> <img class='icon' src="https://img.icons8.com/office/50/000000/home--v2.png"/>
  <a href="#/login" id="logout">CERRAR SESIÓN</a> <img class='icon' src="./imagenes/perfil.svg" />
</nav>
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

  containerNewPost.querySelector('#logout').addEventListener('click', () => {
    signOutUser();
    window.location.hash = '#/login';
  });

  observer();
  return containerNewPost;

// dejar root vacio con el innerthtml Y luego concatenar += el nuevo container para el cambio.
};
