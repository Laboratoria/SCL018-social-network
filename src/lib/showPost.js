import {
  readData, deleteDocData, updateData, auth, updateLikes,
} from '../firebaseFile.js';

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
      <div class="like-bar" value=${auth.currentUser.uid}>
      <button class="like-btn" value=${postData.element.id}>Me gusta</button>
    </div>
      </div>`;
    } else {
      templatePost += `</div>
        <textarea class="post-content" rows="4" cols="50" readonly>${postData.element.data.content}</textarea>
        <textarea class="reference-link" readonly>${postData.element.data.referenceLink}</textarea>
        <div class="like-bar" value=${auth.currentUser.uid}>
          <button class="like-btn" value=${postData.element.id}>Me gusta</button>
        </div>
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
    btn.addEventListener('click', () => {
      const postId = btn.value;
      const parentDivPost = document.getElementById(postId);
      const currentHeader = parentDivPost.querySelector('.header-post');
      const currentContent = parentDivPost.querySelector('.post-content');
      const currentLink = parentDivPost.querySelector('.reference-link');
      currentHeader.removeAttribute('readonly');
      currentContent.removeAttribute('readonly');
      currentLink.removeAttribute('readonly');
      const header = currentHeader.value;
      const content = currentContent.value;
      const link = currentLink.value;
      updateData(postId, header, content, link);
    });
  });

  const likeBtn = containerPost.querySelectorAll('.like-btn');
  likeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const postId = btn.value;
      // const likeDiv = event.target.parentElement;
      const userId = auth.currentUser.uid;
      console.log(userId);
      updateLikes(postId, userId);
    });
  });
  return containerPost;
};
export const showPost = () => {
  readData(createPost, 'publicaciones');
};
