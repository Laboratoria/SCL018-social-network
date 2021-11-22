import { readData, deleteDocData } from '../firebaseFile.js';

export const createPost = (posts) => {
  const containerPost = document.getElementById('post');
  containerPost.innerHTML = '';

  const postContent = (e) => {
    const iterator = Object.values(e);
    const templatePost = `<div class="container-post">
    <div class="header-post-container">
      <textarea class="header-post" readonly>${iterator[0].data.headerPost}</textarea>
      <button value=${iterator[0].id} class="delete-btn">Borrar</button>
    </div>
      <textarea class="post-content" rows="4" cols="50" readonly>${iterator[0].data.content}</textarea>
      <textarea class="reference-link" readonly>${iterator[0].data.referenceLink}</textarea>
      </div>`;
    containerPost.innerHTML += templatePost;
  };
  posts.forEach(postContent);
  const deleteBtn = containerPost.querySelectorAll('.delete-btn');
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const confirm = prompt('¡Vas a borrar tu post!, ¿Deseas continuar? Si / No');
      if (confirm === 'Si' || confirm === 'si'|| confirm === 'Sí' || confirm === 'sí') {
        deleteDocData(btn.value);
      } else {
        alert('No borraste el post');
      }
    });
  });
  return containerPost;
};
export const showPost = () => {
  readData(createPost, 'publicaciones');
};
