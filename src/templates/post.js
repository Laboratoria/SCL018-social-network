import { observer, printPost } from '../firebase/firebase.js';
import { feed } from './feed.js';

export const feedPost = () => {
  const callback = (array) => {
    array.forEach((element) => {
      const postContainer = document.querySelector('#post');
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

      return postContainer;
    });

    observer();
    printPost(callback);
    feed();
  };

  // dejar root vacio con el innerthtml Y luego concatenar += el nuevo container para el cambio.
};
