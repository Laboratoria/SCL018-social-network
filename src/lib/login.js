import { loginWithEmail, loginWithGoogle } from "../firebaseFile.js";

export const login = () => {

    const mainContent = document.getElementById("root");
    const containerLoginUser = document.createElement("section");
    containerLoginUser.className = "view-container";
    const loginHTML = `
    <h1 class="coders-title">CODERS</h1>
    <section class="logo-container">
      <img
        class="logo-coders"
        src="./images/logo_principal.png"
        alt="logo CODERS"
      />
    </section>
    <input
      type="email"
      id="login-email"
      class="input-box"
      name=""
      placeholder="Email"
    />
    <input
      title="Debe tener 6 caracteres mínimo"
      type="password"
      id="login-password"
      class="input-box"
      placeholder="Contraseña"
    />
    <button class="view-button login-btn">Iniciar sesión</button>
    <button class="view-button create-account-link">Crear cuenta</button>
    <button class="view-button login-google"><img class="google-logo" src="./images/google-logo.png"></img>Ingresar con Google</button>`;
    containerLoginUser.innerHTML = loginHTML;
    mainContent.appendChild(containerLoginUser);

    document.querySelector(".login-btn").addEventListener("click", () => {
        loginWithEmail();
    });
    document.querySelector(".create-account-link").addEventListener("click", () => {
        window.location.hash = "#/createUser";
    });
    document.querySelector(".login-google").addEventListener("click", () => {
        loginWithGoogle();
    });

    return containerLoginUser;
};

