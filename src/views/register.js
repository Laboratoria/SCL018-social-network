export const registerUser = () => {
  const drawRegister = document.createElement('section'); //crea un nodo de tipo element
  const registerTemplate = `

  <section class="container-register">
  <section class="container-images">
  <img class="illustration" src="img/kambalache_ilustracion.png" alt="man and woman bartering things">
  <img class="logo" src="img/kambalache_logo.png" alt="kambalache logo">
  </section>
    <section class="form">
      <section class="name">
      <input type="text" placeholder="Nombre de usuario"></input>
    </section>
    <section class="email">
      <input type="email" placeholder="Email"></input>
    </section>
    <section class="password">
      <input type="password" placeholder="Contraseña"></input>
    </section>
    <section class="">
      <button>Registrate</button>
    </section>
    <section class="conditions">
      <h4>Al hacer click en “Registrarte”, confirmo que leí y acepto los <a href='#/login'>Acuerdos de convivencia.</a></h4>
    </section>
    <section class="login-here">
      <h4>¿Ya tienes cuenta?<a href='#/login'>Inicia sesión aqui</a></h4>
    </section>
  </section>
</section>
`;

  drawRegister.innerHTML = registerTemplate;
  return drawRegister;
};
