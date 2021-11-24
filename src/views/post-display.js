/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import { readData, deletePost, updatePost, auth } from "../firebase.js";

export const newPost = (posts) => {
  const newPostContainer = document.querySelector("#postSection");
  newPostContainer.innerHTML = "";
  const feedContent = (e) => {
    // console.log(e.element);
    // const postsValues = Object.values(postData);
    // console.log(postsValues);
    // console.log(postData);
    let feedHtml = `<div class="post-user" id=${e.element.id}>
            <div class="profile-container">
            <div class="pic-container">
            <img class="pic-profile" src="resources/images/Vector-user.svg" alt="user" />
            </div>
            <h3 class="title-profile">Lady Gaga</h3>
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
  const postTheme = newPostContainer.querySelector("#postTheme");
  const postMessage = newPostContainer.querySelector("#postMessage");

  editBtn.forEach((edit) => {
    // console.log(edit);
    edit.addEventListener("click", () => {
      // console.log(edit);
      // postTheme.removeAttribute("readonly");
      // postMessage.removeAttribute("readonly");
      const postId = edit.value;
      // console.log(postId);
      const parentDivPost = document.getElementById(postId);
      const theme = parentDivPost.querySelector("#postTheme").value;
      const message = parentDivPost.querySelector("#postMessage").value;
      updatePost(postId, theme, message);
    });
  });

  return newPostContainer;
};

export const displayFeed = () => {
  readData(newPost, "publicaciones");
};
