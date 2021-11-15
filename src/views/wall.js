import { postData } from "../firebase.js";

const post = document.querySelector("#postBtn");
post.addEventListener("click", () => {
  const postTheme = document.getElementById("postTheme").value;
  const postMessage = document.querySelector("#postMessage").value;
  postData(postTheme, postMessage);
  console.log(postTheme, postMessage);
});
