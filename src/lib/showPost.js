import { readData } from '../firebaseFile.js';

export const createPost = (posts) => {
  const containerPost = document.getElementById('post');
  containerPost.innerHTML = '';
  const divPost = document.createElement('div');
  divPost.className = 'container-post';

  const postContent = (element) => {
    const templatePost = `
      <div class="header-post">${element}</div>
      <div class="post-content"></div>
      <div class="reference-link"></div>`;
    containerPost.innerHTML += templatePost;
  };
  posts.forEach(postContent);
  containerPost.appendChild(divPost);
  return containerPost;
};

export const showPost = () => {
  readData(createPost, 'publicaciones');
};
