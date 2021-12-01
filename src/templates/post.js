import { observer, printPost } from '../firebase/firebase.js';

export const feedPost = (postedPost) => {
  // const callback = (array) => {
  // array.forEach((element) => {
  const postContainer = document.querySelector('#post');
  postContainer.innerHTML = '';
  const templatePosted = (dataPost) => {
    const templatePost = `
      <article class='newpost' >
      <h4 class='gameTitle'> ${dataPost.boardgame} </h4>
      <div class='gameDescription'>${dataPost.description}</div>
      <div id ='countLike'>
      <button class='like'> 
      <i class='italic'></i> ME GUSTA <span class="counterStat">...</span>
      </button>
      </div>
      </article>`;

    postContainer.innerHTML += templatePost;
    // });
    // };
    observer();
    // dejar root vacio con el innerthtml Y luego concatenar += el nuevo container para el cambio.
  };
  postedPost.forEach(templatePosted);
};

export const feed = () => {
  printPost(feedPost, 'posts');
};
