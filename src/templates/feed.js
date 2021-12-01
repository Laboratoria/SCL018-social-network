import { signOutUser, observer, printPost } from '../firebase/firebase.js';

export const feedSpace = () => {
  const showPost = document.createElement('section');
  showPost.id = 'post';
  const containerFeedSpace = document.createElement('section');
  containerFeedSpace.className = 'feed-container';
  containerFeedSpace.innerHTML = `
     <div id='feedContainer' class='feedContainer'>
     <nav class='navbar' id='navbar'>
       <a href="#/feed">INICIO</a> <img class='icon' src="https://img.icons8.com/office/50/000000/home--v2.png"/>
       <a href="#/newPost">NUEVA PUBLICACIÓN</a> <img class='icon' src="https://img.icons8.com/office/50/000000/home--v2.png"/>
       <a href="#/logout" id="logout">CERRAR SESIÓN</a> <img class='icon' src="./imagenes/perfil.svg" />
    </nav>
     <main class= 'main'>
     <input type = "search" class='search' placeholder="busca la categoria"/>
     </main>
     <footer class='footer'>
     "Mewple, todos los derechos reservados ©"
     </footer>
     </div>  */
      `;

  // aqui se valida que el usuario existe, sino no pasa al print
  observer();

  containerFeedSpace.querySelector('#logout').addEventListener('click', () => {
    signOutUser();
  });

  return containerFeedSpace;
};

export const feed = () => {
  printPost(feedSpace, 'publicaciones');
};
