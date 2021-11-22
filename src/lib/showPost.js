import { readData, deleteDocData, updateData } from '../firebaseFile.js';

export const createPost = (posts) => {
  const containerPost = document.getElementById('post');
  containerPost.innerHTML = '';

  const postContent = (e) => {
    const iterator = Object.values(e);
    // console.log(iterator);
    const templatePost = `<div class="container-post">
    <div class="header-post-container">
      <textarea class="header-post" readonly>${iterator[0].data.headerPost}</textarea>
      <button value=${iterator[0].id} class="edit-btn">Editar</button>
      <button value=${iterator[0].id} class="delete-btn">Borrar</button>
    </div>
      <textarea class="post-content" rows="4" cols="50" readonly>${iterator[0].data.content}</textarea>
      <textarea class="reference-link" readonly>${iterator[0].data.referenceLink}</textarea>
      </div>`;
    const modalTemplate = `<div class="update-modal">
    <input type="text" id="title-update" placeholder="Título">
    <textarea placeholder="Descripción" id="description-update" maxlength="150"></textarea>
    <input type="text" id="link-update" placeholder="Link de referencia">
    <div class="modal-btn-container">
      <button class="update-btn">Actualizar</button>
      <button class="close-modal-btn">Cerrar</button>
    </div> 
  <div>`;
    containerPost.innerHTML += modalTemplate;
    containerPost.innerHTML += templatePost;
  };
  posts.forEach(postContent);
  const deleteBtn = containerPost.querySelectorAll('.delete-btn');
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      deleteDocData(btn.value);
    });
  });
  const editBtn = containerPost.querySelectorAll('.edit-btn');
  const modal = containerPost.querySelector('.update-modal');
  const titleUpdate = containerPost.querySelector('#title-update').value;
  const descriptionUpdate = containerPost.querySelector('#description-update').value;
  const linkUpdate = containerPost.querySelector('#link-update').value;
  const updateBtn = containerPost.querySelector('.update-btn');

  // modal functions
  let postID = '';
  editBtn.forEach((ebtn) => {
    ebtn.addEventListener('click', () => {
      // deleteDocData(btn.value);
      postID = ebtn.value;
      modal.style.display = 'flex';
      
    });
  });

  updateBtn.addEventListener('click', () => {
    updateData(titleUpdate, descriptionUpdate, linkUpdate, postID);
  });
  const closeModalBtn = containerPost.querySelector('.close-modal-btn');
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  return containerPost;
};

export const showPost = () => {
  readData(createPost, 'publicaciones');
};
