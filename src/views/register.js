export const registerUser = () => {
  const drawRegister = document.createElement('section');
  const registerTemplate = `
<input type="email" placeholder="Email"></input>
<input type="password" placeholder="Contraseña"></input>
<button id="btnLogin">REGISTRARTE</button>`;

  drawRegister.innerHTML = registerTemplate;
  return drawRegister;
};
