import { userLogin, loginWithGoogle } from "../firebase.js";

export const landingPage = () => {
  const containerLanding = document.createElement("section");
  containerLanding.className = "view-container";
  const viewLanding = `
  <header>
    <div class="logo-container">
        <img
        class="landing-logo"
        src="resources/images/logo-GG-white.png"
        alt="landing-logo"/>
    </div>
    <div class="title-container">
        <h1 class="landing-title">Gamer Girl</h1>
        <h2 class="landing-subtitle">Tu espacio seguro</h2>
    </div>
  </header>
  <div class="login-container">
      <div class="login-inputs">
        <h3 class="login-title">Iniciar Sesión</h3>
        <input
          class="user-input"
          id="emailLogin"
          type="email"
          placeholder="Ingresa tu correo"
          maxlength="30"
        />
        <input
          class="user-password"
          id="passLogin"
          type="password"
          placeholder="Ingresa tu contraseña"
          maxlength="30"
        />
        <button class="login-btn" id="signUp" type="submit">
          Iniciar Sesión
        </button>
        <div class="hr-container">
          <hr class="hr-login-left" />
          <p class="hr-or">O</p>
          <hr class="hr-login-right" />
        </div>
        <div class="logo-google-container">
          <img
            class="google-logo"
            src="resources/images/logo-google.png"
            alt="google-logo"
          />
          <button class="google-title" id="googleLogin">
            Inicia sesión con Google
          </button>
        </div>
        <hr class="hr-login-center" />
        <div class="signup-container">
          <h3 class="register-title">¿No tienes una cuenta?</h3>
          <button class="register-btn" type="button">Regístrate</button>
        </div>
      </div>
  </div> `;
  containerLanding.innerHTML = viewLanding;
  containerLanding.querySelector("#signUp").addEventListener("click", () => {
    userLogin();
    window.location.hash = "#/wall";
  });
  containerLanding
    .querySelector(".register-btn")
    .addEventListener("click", () => {
      window.location.hash = "#/register";
    });
  containerLanding
    .querySelector("#googleLogin")
    .addEventListener("click", () => {
      loginWithGoogle();
    });
  return containerLanding;
};
