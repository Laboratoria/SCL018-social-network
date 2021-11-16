import { readData } from '../firebaseFile.js';

export const createPost = (posts) => {
  const containerPost = document.getElementById('post');
  containerPost.innerHTML = '';
  const divPost = document.createElement('div');
  divPost.className = 'container-post';

  const postContent = (element) => {
    const templatePost = `
      <div class="header-post">${element.headerPost}</div>
      <div class="post-content">${element.content}</div>
      <div class="reference-link">${element.referenceLink}</div>`;
    containerPost.innerHTML += templatePost;
  };
  posts.forEach(postContent);
  containerPost.appendChild(divPost);
  return containerPost;
};

export const showPost = () => {
  readData(createPost, 'publicaciones');
};
