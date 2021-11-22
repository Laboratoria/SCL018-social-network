import { printPost } from '../firebase/firebase.js';

export const feedSpace = () => {
  const containerFeedSpace = document.createElement('section');
  containerFeedSpace.className = 'feed-container';
  containerFeedSpace.innerHTML = `
     <div id='feedContainer' class='feedContainer'>
     <nav class='navbar' id='navbar'>
       <a href="#/home">HOME</a> <img class='icon' src="https://img.icons8.com/office/50/000000/home--v2.png"/>
       <a href="#/junta">JUNTAS</a> <img class='icon' src="./imagenes/juntas.svg" />
       <a href="#/review">REVIEW</a> <img class='icon' src="./imagenes/review.svg" />
       <a href="#/intercambio y venta">INTERCAMBIO Y VENTA</a> <img class='icon' src="./imagenes/intercambio.svg" />
       <a href="#/general">GENERAL</a> <img class='icon' src="./imagenes/general.svg" />
       <a href="#/perfil">PERFIL</a> <img class='icon' src="./imagenes/perfil.svg" />
     </nav>
     <main class= 'main'>
     <div> </div>
     <div> </div>
     <button class= 'post'>NUEVA PUBLICACIÓN
     </button>
     <input type = "search" class='search' placeholder="busca la categoria"/>
     </main>
     <footer class='footer'>
     "todos los derechos reservados por Mewple"
     </footer>
     </div>
      `;

  containerFeedSpace.querySelector('.post').addEventListener('click', () => {
    containerFeedSpace.innerHTML = ' ';
    printPost();
  });

  return containerFeedSpace;

  // dejar root vacio con el innerthtml Y luego concatenar += el nuevo container para el cambio.
};
