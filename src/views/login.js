export const loginUser = () => {
  const drawLogin = document.createElement('section');
  const loginTemplate = `
  
  <section class="container-register">
  <section class="container-images">
  <img id="illustration" src="img/kambalache_ilustracion.png" alt="man and woman bartering things">
  <img id="logo" src="img/kambalache_logo.png" alt="kambalache logo">
  </section>
    <section class="form">
    <section class="email">
      <input type="email" placeholder="Email"></input>
    </section>
    <section class="password">
      <input type="password" placeholder="Contraseña"></input>
    </section>
    <section class="name">
      <button>Iniciar Sesion</button>
    </section>
    <section class="register-here">
      <h4>¿No tienes cuenta?<a href='#/register'>Registrate aqui</h4>
    </section>
  </section>
</section>
`;


  drawLogin.innerHTML = loginTemplate;
  return drawLogin;
};
