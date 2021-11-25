import { signOutUser, posting, printPost } from '../firebase/firebase.js';

export const feedSpace = (posts) => {
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
     <section id='postContainer'> </section>
     
     <input type = "search" class='search' placeholder="busca la categoria"/>
     </main>
     <footer class='footer'>
     "Mewple, todos los derechos reservados ©"
     </footer>
     </div>
      `;
  const callback = (array) => {
    array.forEach((element) => {
      const postContainer = containerFeedSpace.querySelector('#postContainer');
      postContainer.innerHTML += `
      <article class='newpost' >
      <h4 class='gameTitle'> ${element.boardgame} </h4>
      <div class='gameDescription'>${element.description}</div>
      <button class='like'>ME GUSTA
      </button>
      </article>`;
    });
  };
  printPost(callback);

  containerFeedSpace.querySelector('#logout').addEventListener('click', () => {
    signOutUser();
  });
  return containerFeedSpace;
};
