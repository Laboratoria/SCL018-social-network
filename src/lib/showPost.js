import { readData, deleteDocData, updateData } from '../firebaseFile.js';

export const createPost = (posts) => {
  const containerPost = document.getElementById('post');
  containerPost.innerHTML = '';

  const postContent = (e) => {
    const iterator = Object.values(e);

    const templatePost = `<div class="container-post">
    <div class="header-post-container">
      <textarea class="header-post" readonly>${iterator[0].data.headerPost}</textarea>
      <button value=${iterator[0].id} class="edit-btn">Editar</button>
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

      deleteDocData(btn.value);
    });
  });
  const editBtn = containerPost.querySelectorAll('.edit-btn');

  const headerPost = containerPost.querySelector('.header-post');
  const contentPost = containerPost.querySelector('.post-content');
  const linkReference = containerPost.querySelector('.reference-link');

  editBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      headerPost.removeAttribute('readonly');
      contentPost.removeAttribute('readonly');
      linkReference.removeAttribute('readonly');
      // updateData(headerPost.value, contentPost.value, linkReference.value, editBtn.value);
    });
  });
  return containerPost;
};
export const showPost = () => {
  readData(createPost, 'publicaciones');
};
