import { readData, deleteDocData, updateData, auth } from '../firebaseFile.js';

export const createPost = (posts) => {
  const containerPost = document.getElementById('post');
  containerPost.innerHTML = '';

  const postContent = (postData) => {
    let templatePost = `<div class="container-post" id="${postData.element.id}">
    <div class="header-post-container">
      <textarea class="header-post" readonly>${postData.element.data.headerPost}</textarea>`;

    if (postData.element.data.userId === auth.currentUser.uid) {
      templatePost += `<button value=${postData.element.id} class="edit-btn"><img class="edit-icon" src="./images/edit-icon.png"></img></button>
        <button value=${postData.element.id} class="delete-btn"><img class="delete-icon" src="./images/delete-icon.png"></img></button>
        </div>
      <textarea class="post-content" rows="4" cols="50" readonly>${postData.element.data.content}</textarea>
      <textarea class="reference-link" readonly>${postData.element.data.referenceLink}</textarea>
      </div>`;
    } else {
      templatePost += `</div>
        <textarea class="post-content" rows="4" cols="50" readonly>${postData.element.data.content}</textarea>
        <textarea class="reference-link" readonly>${postData.element.data.referenceLink}</textarea>
        </div>`;
    }
    containerPost.innerHTML += templatePost;
  };
  posts.forEach(postContent);
  const deleteBtn = containerPost.querySelectorAll('.delete-btn');
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (confirm('¡Vas a borrar tu post! ¿Deseas continuar?')) {
        deleteDocData(btn.value);
      }
    });
  });
  const editBtn = containerPost.querySelectorAll('.edit-btn');

  editBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const targetBtn = event.target.parentElement;
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
