/* import { signIn } from '../lib/firebase.js'; */

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
      <input type="email" id= "loginEmail" placeholder="Email"></input>
    </section>
    <section class="password">
      <input type="password" id= "loginPassword" placeholder="Contraseña"></input>
    </section>
    <section class="">
      <button id= "loginBtn">Iniciar Sesión</button>
    </section>
    <section class="register-here">
      <h4>¿No tienes cuenta?<a href='#/register'>Regístrate aquí</h4>
    </section>
  </section>
</section>
`;

  drawLogin.innerHTML = loginTemplate;

  const loginBtn = drawLogin.querySelector('#loginBtn');
  loginBtn.addEventListener('click', () => {
    const loginEmail = drawLogin.querySelector('#loginEmail');
    const loginPassword = drawLogin.querySelector('#loginPassword').value;
    console.log(loginEmail);
    console.log(loginPassword);
  /*  signIn(loginEmail, loginPassword); */
  });

  return drawLogin;
};
