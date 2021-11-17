import { readData } from '../firebaseFile.js';

export const createPost = (posts) => {
  const containerPost = document.getElementById('post');
  containerPost.innerHTML = '';

  const postContent = (element) => {
    const templatePost = `<div class="container-post">
      <div class="header-post">${element.headerPost}</div>
      <div class="post-content">${element.content}</div>
      <div class="reference-link">${element.referenceLink}</div>
      </div>`;
    containerPost.innerHTML += templatePost;
  };
  posts.forEach(postContent);
  return containerPost;
};

export const showPost = () => {
  readData(createPost, 'publicaciones');
};
