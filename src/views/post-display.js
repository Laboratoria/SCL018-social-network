import { readData, deletePost } from "../firebase.js";

export const newPost = (posts) => {
  const newPostContainer = document.querySelector("#postSection");
  newPostContainer.innerHTML = "";
  const feedContent = (e) => {
    const asdf = Object.values(e);
    const feedHtml = `<div class="post-user">
            <div class="profile-container">
            <div class="pic-container">
            <img class="pic-profile" src="resources/images/Vector-user.svg" alt="user" />
            </div>
            <h3 class="title-profile">Lady Gaga</h3>
            </div>
            <div class="textarea-container">
            <textarea class="post-theme" id="postTheme" cols="10" rows="1" readonly>${asdf[0].data.theme}</textarea>
            <textarea class="post-message" id="postMessage" cols="15" rows="5" readonly>${asdf[0].data.message}</textarea>
            </div>
            <div class="icons-container">
            <div class="like-container">
            <img src="./resources/images/corazon.png" alt="like">
            </div>
              <div class="trash-container"> 
              <button id="trash-icon" value=${asdf[0].id}><img src="./resources/images/trash.png" alt="trash"></button>
              </div>
              <div class="edit-container">
              <img src="./resources/images/edit.png" alt="edit">
              </div>
            </div>
            </div>`;

    newPostContainer.innerHTML += feedHtml;
  };

  posts.forEach(feedContent);
  const deleteBtn = newPostContainer.querySelectorAll("#trash-icon");
  deleteBtn.forEach((trash) => {
    trash.addEventListener("click", () => {
      deletePost(trash.value);
    });
  });
  return newPostContainer;
};

export const displayFeed = () => {
  readData(newPost, "publicaciones");
};
