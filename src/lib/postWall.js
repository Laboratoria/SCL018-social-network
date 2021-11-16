import { showPost } from './showPost.js';

export const postWall = () => {
  const containerPostWall = document.createElement('section');
  containerPostWall.className = 'post-wall';
  containerPostWall.id = 'post';
  showPost();
  return containerPostWall;
};
