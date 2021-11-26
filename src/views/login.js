import { signIn, googleSignIn, redirection } from '../lib/firebase.js';

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
    <section class="">
      <button id= "googleBtn">Iniciar Sesión con Google</button>
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
    const loginEmail = drawLogin.querySelector('#loginEmail').value;
    const loginPassword = drawLogin.querySelector('#loginPassword').value;
    console.log(loginEmail);
  
    signIn(loginEmail, loginPassword);
  });

  const googleBtn = drawLogin.querySelector('#googleBtn');
  googleBtn.addEventListener('click', () => {
    googleSignIn();
    redirection();
  });

  return drawLogin;
};

// usuario: marion@hola.cl , contraseña: blabla //
// quitamos el console.log de contraseña porque nos aparecía mensaje de error //
