/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import {
  readData, deletePost, updatePost, auth,
} from "../firebase.js";

export const newPost = (posts) => {
  const newPostContainer = document.querySelector("#postSection");
  newPostContainer.innerHTML = "";
  const feedContent = (e) => {
    let feedHtml = `<div class="post-user" id=${e.element.id}>
            <div class="profile-container">
            <div class="pic-container">
            <img class="pic-profile" src="resources/images/gamer.png" alt="user" />
            </div>
            <h3 class="title-profile">${e.element.data.username === null ? "Anonimo" : e.element.data.username}</h3>
            </div>`;

    if (e.element.data.userId === auth.currentUser.uid) {
      feedHtml += `<div class="textarea-container">
      <textarea class="post-theme" id="postTheme" cols="10" rows="1" readonly>${e.element.data.theme}</textarea>
      <textarea class="post-message" id="postMessage" cols="15" rows="5" readonly>${e.element.data.message}</textarea>
      </div>
      <div class="icons-container">
      <div class="like-container">
      <img src="./resources/images/corazon.png" alt="like">
      </div>
      <div class="trash-container"> 
        <button class="trash-icon" id="trashBtn" value=${e.element.id}><img src="./resources/images/trash.png" alt="trash"></button>
        </div>
        <div class="edit-container">
        <button class="edit-icon" id="editBtn" value=${e.element.id}><img src="./resources/images/edit.png" alt="edit"></button>
      </div>
      </div>
      </div>`;
    } else {
      feedHtml += `<div class="textarea-container">
      <textarea class="post-theme" id="postTheme" cols="10" rows="1" readonly>${e.element.data.theme}</textarea>
      <textarea class="post-message" id="postMessage" cols="15" rows="5" readonly>${e.element.data.message}</textarea>
      </div>
      <div class="icons-container">
      <div class="like-container">
      <img src="./resources/images/corazon.png" alt="like">
      </div>`;
    }
    newPostContainer.innerHTML += feedHtml;
    // buscar si es template ${postsValues[0].id} debe ir entre comillas o no
  };
  posts.forEach(feedContent);

  const deleteBtn = newPostContainer.querySelectorAll("#trashBtn");
  deleteBtn.forEach((trash) => {
    trash.addEventListener("click", () => {
      if (confirm("¿estás segura que quieres eliminar el post?")) {
        deletePost(trash.value);
      }
    });
  });
  const editBtn = newPostContainer.querySelectorAll("#editBtn");
  editBtn.forEach((edit) => {
    edit.addEventListener("click", () => {
      const postId = edit.value;
      const parentDivPost = document.getElementById(postId);
      const currentPostTheme = parentDivPost.querySelector("#postTheme");
      const currentPostMessage = parentDivPost.querySelector("#postMessage");
      const theme = currentPostTheme.value;
      const message = currentPostMessage.value;
      if (confirm("¿estás segura que quieres editar el post?")) {
        currentPostTheme.removeAttribute("readonly");
        currentPostMessage.removeAttribute("readonly");
      }
      updatePost(postId, theme, message);
    });
  });

  return newPostContainer;
};

export const displayFeed = () => {
  readData(newPost, "publicaciones");
};
