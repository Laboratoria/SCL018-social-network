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
     </div>  */
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

/*   const likeBtn = containerFeedSpace.querySelector('.like');
  likeBtn.addEventListener('click', (user) => {
    const userLike = user.uid;
    const like = [];
    for (let i = 0; i < like.length; i = +1) {
      const likeArray = like[i];
      if (userLike === 0) {
        return like + 1;
      }
      return like - 1;
    }
    // AQUI VA UN RETURN, PERO NO SABEMOS A QUE COSA :(
    // const dDatabase = firebase.database().ref('Like Number Counter').child(userLike);
    // dDatabase.transaction((dCount) => (dCount || 0) + 1);
  }); */
  return containerFeedSpace;
};
