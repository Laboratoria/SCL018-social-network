import { signOutUser, printPost, observer } from '../firebase/firebase.js';

export const feedSpace = () => {
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
      <div id ='countLike'>
      <button class='like'> 
      <i class='italic'></i> ME GUSTA <span class="counterStat">...</span>
      </button>
      </div>
      </article>`;
    });
  };
  // aqui se valida que el usuario existe, sino no pasa al print
  observer();
  printPost(callback);

  containerFeedSpace.querySelector('#logout').addEventListener('click', () => {
    signOutUser();
  });

  const dCounters = containerFeedSpace.querySelector('#countLike');
  // en un array vacio: recorremos los id existentes a un boton me gusta
  [].forEach.call(dCounters, (dCounter) => {
    // por cada uno recorrido sumamos uno
    const likeBtn = dCounter.querySelector('.like');
    const userLike = dCounter.uid;
    const dDatabase = firebase.database().ref('Like Number Counter').child(userLike);

    /*  // get firebase data
    dDatabase.on('value', (cLike) => {
      const data = cLike.val() || 0;
      containerFeedSpace.querySelector('span').innerHTML += data;
    });
 */

    // suma uno más al hacer click
    likeBtn.addEventListener('click', () => {
      // aqui escucha si ya existia, entonces borra el like.
      // en cambio si no existe, lo agrega like++
      dDatabase.transaction((dCount) => (dCount || 0) + 1);
      // cuenta el largo total del array (cuenta en cada elemento)
    });
  });
  return containerFeedSpace;
};
