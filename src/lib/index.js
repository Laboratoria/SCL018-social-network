// aqui exportaras las funciones que necesites

export const printSignUp = () => {
  const signUpTemplate = `<h1 class="coders-title">CODERS</h1>
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
  <button class="login-button create-account">Crear cuenta</button>`;
  return signUpTemplate;
};
