/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import { readData, deletePost, updatePost } from "../firebase.js";
// import { wall } from "./wall.js";

export const newPost = (posts) => {
  const newPostContainer = document.querySelector("#postSection");
  newPostContainer.innerHTML = "";
  const feedContent = (postData) => {
    const postsValues = Object.values(postData);
    // console.log(e);
    const feedHtml = `<div class="post-user" id=${postsValues[0].id}>
            <div class="profile-container">
            <div class="pic-container">
            <img class="pic-profile" src="resources/images/Vector-user.svg" alt="user" />
            </div>
            <h3 class="title-profile">Lady Gaga</h3>
            </div>
            <div class="textarea-container">
            <textarea class="post-theme" id="postTheme" cols="10" rows="1" readonly>${postsValues[0].data.theme}</textarea>
            <textarea class="post-message" id="postMessage" cols="15" rows="5" readonly>${postsValues[0].data.message}</textarea>
            </div>
            <div class="icons-container">
            <div class="like-container">
            <img src="./resources/images/corazon.png" alt="like">
            </div>
              <div class="trash-container"> 
              <button class="trash-icon" id="trashBtn" value=${postsValues[0].id}><img src="./resources/images/trash.png" alt="trash"></button>
              </div>
              <div class="edit-container">
              <button class="edit-icon" id="editBtn" value=${postsValues[0].id}><img src="./resources/images/edit.png" alt="edit"></button>
              </div>
            </div>
            </div>`;
    // buscar si es template ${postsValues[0].id} debe ir entre comillas o no
    newPostContainer.innerHTML += feedHtml;
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
    edit.addEventListener("click", () => {
      // console.log(edit);
      // alert("click is working");
      // const targetBtn = event.target.parentElement;
      // console.log(targetBtn);
      // targetBtn.previousElementSibling.removeAttribute("readonly");
      // console.log(targetBtn.previousElementSibling);
      // targetBtn.parentElement.nextElementSibling.removeAttribute("readonly");
      // targetBtn.parentElement.nextElementSibling.nextElementSibling.removeAttribute("readonly");
      postTheme.removeAttribute("readonly");
      postMessage.removeAttribute("readonly");
      const postId = edit.value;
      const parentDivPost = document.getElementById(postId);
      const theme = parentDivPost.querySelector("#postTheme").value;
      const message = parentDivPost.querySelector("#postMessage").value;
      updatePost(postId, theme, message);
    });
  });

  // editBtn.forEach((btn) => {
  //   btn.addEventListener('click', (event) => {
  //     const targetBtn = event.target;
  //     targetBtn.previousElementSibling.removeAttribute('readonly');
  //     targetBtn.parentElement.nextElementSibling.removeAttribute('readonly');
  //     targetBtn.parentElement.nextElementSibling.nextElementSibling.removeAttribute('readonly');
  //     const postId = btn.value;
  //     const parentDivPost = document.getElementById(postId);
  //     const header = parentDivPost.querySelector('.header-post').value;
  //     const content = parentDivPost.querySelector('.post-content').value;
  //     const link = parentDivPost.querySelector('.reference-link').value;
  //     updateData(postId, header, content, link);
  //   });
  // });

  return newPostContainer;
};

export const displayFeed = () => {
  readData(newPost, "publicaciones");
};
