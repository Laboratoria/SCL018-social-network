import { signUp } from "../firebaseFile.js";

export const createUser = () => {
  const mainContent = document.getElementById("root");
  // const containerCreateUser = document.createElement("section");
  // containerCreateUser.className = "view-container";
  const signUpHTML = `
  <section class="view-container">
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
          id="signup-email"
          class="input-box"
          name=""
          placeholder="Ingrese su email"
        />
        <input
          title="Debe tener 6 caracteres mínimo"
          type="password"
          id="signup-password"
          class="input-box"
          placeholder="Ingrese una contraseña"
        />
        <button id="create-account" class="view-button">Crear cuenta</button>
        </section>`;
  mainContent.innerHTML = signUpHTML;
  document.querySelector("#create-account").addEventListener("click", () => {
    signUp();
  });

  return mainContent;
};
