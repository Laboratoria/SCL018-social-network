import { signUp } from '../firebase.js';

export const register = () => {
  const menuRegister = document.getElementById('root');
  const containerCreateUser = document.createElement('section');
  containerCreateUser.className = 'view-container';
  const registerpage = `
<header>
  <div class="logo-container">
    <img
      class="landing-logo"
      src="resources/images/logo-GG-white.png"
      alt="landing-logo"
    />
  </div>
  <div class="title-container">
    <h1 class="landing-title">Gamer Girl</h1>
    <h2 class="landing-subtitle">Tu espacio seguro</h2>
  </div>
</header>
<form class="register-container">
  <div class="login-inputs">
    <h3 class="login-title">Únete a la legión</h3>
    <input class="user-name"  
    id="user" 
    type="text" 
    placeholder="Ingresa tu usuario"
    maxlength="30"
    autocomplete="on">
    </input>
    <input
      class="user-input"
      id="emailSignUp"
      type="email"
      placeholder="Ingresa tu correo"
      maxlength="30"
      autocomplete="on"
    />
    <input
      class="user-password"
      id="passwordSignUp"
      type="password"
      placeholder="Ingresa tu contraseña"
      maxlength="30"
      autocomplete="current-password"
    />
    <button class="register-btn-inner" id="signup" type="button">Regístrate</button>
  </div>
</form>`;

  containerCreateUser.innerHTML = registerpage;
  menuRegister.appendChild(containerCreateUser);
  document.querySelector('#signup').addEventListener('click', () => {
    signUp();
  });
  return containerCreateUser;
};
