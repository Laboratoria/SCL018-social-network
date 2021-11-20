import { readData, deleteDocData } from '../firebaseFile.js';

export const createPost = (posts) => {
  const containerPost = document.getElementById('post');
  containerPost.innerHTML = '';

  const postContent = (element) => {
    const templatePost = `<div class="container-post">
    <div class="header-post-container">
      <textarea class="header-post" readonly>${element.headerPost}</textarea>
      <button class="delete-btn">Borrar</button>
    </div>
      <textarea class="post-content" rows="4" cols="50" readonly>${element.content}</textarea>
      <textarea class="reference-link" readonly>${element.referenceLink}</textarea>
      </div>`;
    containerPost.innerHTML += templatePost;
  };
  posts.forEach(postContent);
  const deleteBtn = containerPost.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    deleteDocData();
  });
  return containerPost;
};

export const showPost = () => {
  readData(createPost, 'publicaciones');
};