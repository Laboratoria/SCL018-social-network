import { readData, deleteDocData, updateData } from '../firebaseFile.js';

export const createPost = (posts) => {
  const containerPost = document.getElementById('post');
  containerPost.innerHTML = '';

  const postContent = (postData) => {
    const iterator = Object.values(postData);

    const templatePost = `<div class="container-post" id="${iterator[0].id}">
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
      if(confirm('¡Vas a borrar tu post! ¿Deseas continuar?')) {
        deleteDocData(btn.value);
      }
    });
  });
  const editBtn = containerPost.querySelectorAll('.edit-btn');

  editBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const targetBtn = event.target;
      targetBtn.previousElementSibling.removeAttribute('readonly');
      targetBtn.parentElement.nextElementSibling.removeAttribute('readonly');
      targetBtn.parentElement.nextElementSibling.nextElementSibling.removeAttribute('readonly');
      const postId = btn.value;
      const parentDivPost = document.getElementById(postId);
      const header = parentDivPost.querySelector('.header-post').value;
      const content = parentDivPost.querySelector('.post-content').value;
      const link = parentDivPost.querySelector('.reference-link').value;
      updateData(postId, header, content, link);
    });
  });
  return containerPost;
};
export const showPost = () => {
  readData(createPost, 'publicaciones');
};
