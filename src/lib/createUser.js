import { signUp } from '../firebaseFile.js';

export const createUser = () => {
  const containerCreateUser = document.createElement('section');
  containerCreateUser.className = 'view-container';
  const signUpHTML = `
  <section class="view-container">
    <h1 class="coders-title">CODERS</h1>
        <section class="logo-container">
          <img
            class="logo-coders"
            src="./images/logo-principal.png"
            alt="logo CODERS"
          />
        </section>
        <input
          type="email"
          id="signup-email"
          class="input-box-email"
          name=""
          placeholder="Ingrese su email"
        />
        <input
          title="Debe tener 6 caracteres mínimo"
          type="password"
          id="signup-password"
          class="input-box-password"
          placeholder="Ingrese una contraseña"
        />
        <button id="create-account" class="view-button create-account">Crear cuenta</button>
        </section>`;
  containerCreateUser.innerHTML = signUpHTML;
  containerCreateUser.querySelector('#create-account').addEventListener('click', () => {
    const signUpEmail = document.getElementById('signup-email').value;
    const signUpPassword = document.getElementById('signup-password').value;
    signUp(signUpEmail, signUpPassword);
  });

  return containerCreateUser;
};
