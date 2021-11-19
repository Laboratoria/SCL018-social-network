// Aqui deberin ir los post;
export const newPost = () => {
  const containerNewPost = document.createElement('section');
  containerNewPost.className = 'feed-container';
  containerNewPost.innerHTML = `
        <section>
        <div>
        <input placeholder="¿como se llama tu publicación?"/>
        <input placeholder="Escribe aquí tu post"/>
        </div>
        <button class='publish'>PUBLICAR
        </button>
        </section>`;

  containerNewPost.querySelector('.publish').addEventListener('click', () => {
    window.location.hash = '#/feed';
  });

  return containerNewPost;

// dejar root vacio con el innerthtml Y luego concatenar += el nuevo container para el cambio.
};
