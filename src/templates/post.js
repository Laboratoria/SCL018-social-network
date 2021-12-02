export const feedPost = (postedPost) => {
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
  };
  postedPost.forEach(templatePosted);
};
